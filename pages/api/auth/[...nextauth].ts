import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { api } from "../../../lib/api"

type User = {
    id: string,
    name: string,
    email: string,
    accessToken: string
}

const jwt = require('jsonwebtoken')

const providers = [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: {label: "email", type: "text"},
            password: {label: "password", type: "password"},
        },
        authorize: async (credentials: any, req) => {
            try {
                const res = await api('POST', 'login', undefined, JSON.stringify({email: credentials.email, password: credentials.password}))

                if (res.status == 200) {
                    const token = res.headers.get('Authorization')
                    const userRes = await api('GET', 'me', token).then(res => res.json())
                    const user: User = { id: userRes.id, name: userRes.name, email: userRes.email, accessToken: token }
                    return user
                }
            } catch(e: any) {
                throw new Error("Login failed!")
            }
            return null
        }
    })
]

export default NextAuth({providers,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        }
    },
    pages: {
        error: '/login'
    },
    secret: "mySecret",
    jwt: {
        maxAge: 1 * 60 * 60,
        async encode(params: {
            token: JWT
            secret: string
            maxAge: number
          }): Promise<string> {
            const tokenContents = {
                id: params.token.sub,
                name: params.token.name,
                email: params.token.email,
                accessToken: params.token.accessToken,
                sub: params.token.sub
            }
            const encodedToken = jwt.sign(tokenContents, "mySecret")
            // console.log("TOKEN CONTENTS" + JSON.stringify(tokenContents))
            return encodedToken
          },
        async decode(params: {
            token: string
            secret: string
          }): Promise<JWT | null> {
            const decodedToken = jwt.verify(params.token, "mySecret")
            // console.log("DECODED " + JSON.stringify(decodedToken))
            return decodedToken
        }
    }
})