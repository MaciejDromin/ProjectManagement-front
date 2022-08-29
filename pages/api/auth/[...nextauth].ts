import { getToken } from "next-auth/jwt"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

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
                const res = await fetch('http://localhost:8080/login', {
                    method: 'POST',
                    body: JSON.stringify({email: credentials.email, password: credentials.password}),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })

                if (res.status == 200) {
                    const token = res.headers.get('Authorization')
                    const userRes = await fetch('http://localhost:8080/me', {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Authorization': token
                        }
                    }).then(res => res.json())
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
            return session
        }
    },
    pages: {
        error: '/login'
    },
    secret: "mySecret",
    jwt: {
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
            return encodedToken
          },
        async decode(params: {
            token: string
            secret: string
          }): Promise<JWT | null> {
            const decodedToken = jwt.verify(params.token, "mySecret")
            return decodedToken
        }
    }
})