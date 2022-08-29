import Link from "next/link"
import { signIn } from 'next-auth/react'
import { useState, FormEvent } from "react"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        signIn('credentials', {
            email,
            password
        })
    }

    return (
        <div className="flex flex-col pt-12">
            <input onChange={(e: FormEvent<HTMLInputElement>) => {setEmail(e.currentTarget.value)}} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <input onChange={(e: FormEvent<HTMLInputElement>) => {setPassword(e.currentTarget.value)}} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <div className="flex justify-between max-w-xs mx-auto">
                <button className="btn my-2 mr-12">
                    <Link href="/password-recovery">Reset password</Link>
                    </button>
                <button onClick={handleLogin} className="btn my-2">Login</button>
            </div>
        </div>
    );
}

export default Login