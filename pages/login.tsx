import Link from "next/link";

const Login = () => {
    return (
        <div className="flex flex-col pt-12">
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <div className="flex justify-between max-w-xs mx-auto">
                <button className="btn my-2 mr-12">
                    <Link href="/password-recovery">Reset password</Link>
                    </button>
                <button className="btn my-2">Login</button>
            </div>
        </div>
    );
}

export default Login