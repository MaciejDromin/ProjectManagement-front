import { useState, FormEvent } from "react"
import { useRouter } from 'next/router'
import type { ShareGroupType } from "../lib/types"

interface Props {
    groupId: number
}

const ShareGroup = (props: Props) => {

    const [userEmail, setUserEmail] = useState('')
    const router = useRouter()
    const shareGroup = async () => {
        const body:ShareGroupType = {
            groupId: props.groupId,
            userSharing: null,
            userSharedToEmail: userEmail
        }
        const response = await fetch('/api/groups/share', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        if (response.status == 200) {
            router.reload()
        }
    }

    return (
        <div>
            <p className="text-2xl pb-4">Share Group</p>
            <div className="py-2">
                <input onChange={(e: FormEvent<HTMLInputElement>) => {setUserEmail(e.currentTarget.value)}} type="text" placeholder="User Email" className="input input-bordered w-full max-w-xs" />
                <button onClick={shareGroup}>Share</button>
            </div>
        </div>
    );
}

export default ShareGroup