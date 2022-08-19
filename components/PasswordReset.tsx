const PasswordReset = () => {
    return (
        <div className="flex flex-col pt-12">
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <input type="password" placeholder="Repeat password" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <div className="mx-auto">
                <button className="btn my-2">Reset password</button>
            </div>
        </div>
    );
}

export default PasswordReset