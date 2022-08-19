import { useState } from "react";
import Link from "next/link";
import PasswordReset from "../components/PasswordReset";

const PasswordRec = () => {

    const [recovery, setRecovery] = useState({ hadSearched: false, accExists: false })

    return (
        <>
            {
                recovery.hadSearched && recovery.accExists ?
                    <PasswordReset/> :
                    <div className="flex flex-col pt-12">
                        <div className="form-controll w-full max-w-xs mx-auto">
                            <input type="text" placeholder="Email" className={'input input-bordered w-full max-w-xs my-2 mx-auto ' + (recovery.hadSearched && !recovery.accExists ? 'input-error' : '')} />
                            {recovery.hadSearched && !recovery.accExists &&
                                <label className="label">
                                    <span className="label-text-alt text-error">Account with such email doesn't exists!</span>
                                </label>
                            }
                        </div>
                        <button className="btn my-2 mx-auto">
                            Reset Password
                        </button>
                    </div>
            }
        </>
    );
}

export default PasswordRec