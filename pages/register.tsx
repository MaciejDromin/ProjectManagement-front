import { useState } from "react";

const Register = () => {

    const [emailTaken, setEmailTaken] = useState(true)

    return (
        <div className="flex flex-col pt-12">
            <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <div className="form-controll w-full max-w-xs mx-auto">
                <input type="text" placeholder="Email" className={'input input-bordered w-full max-w-xs my-2 ' + (emailTaken ? 'input-error' : '')} />
                {emailTaken &&
                    <label className="label">
                        <span className="label-text-alt text-error">Email is already taken!</span>
                    </label>
                }
            </div>
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <input type="password" placeholder="Repeat password" className="input input-bordered w-full max-w-xs my-2 mx-auto" />
            <div className="mx-auto">
                <button className="btn my-2">Register</button>
            </div>
        </div>
    );
}

export default Register