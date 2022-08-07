import { useState, FormEvent } from "react"
import type { GroupCreation } from "../lib/types"

const GroupAdd = () => {

    const [groupName, setGroupName] = useState('')

    const saveProject = async () => {
        const body:GroupCreation = {
            name: groupName
        }
        //TODO: integrate with backend
        const response = await fetch('/api/project', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    //TODO: Do validation on inputs
    return (
        <div>
            <p className="text-2xl pb-4">Add Group</p>
            <div className="py-2">
                <input onChange={(e: FormEvent<HTMLInputElement>) => {setGroupName(e.currentTarget.value)}} type="text" placeholder="Group Name" className="input input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
}

export default GroupAdd