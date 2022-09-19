import { useState, useEffect, FormEvent } from "react"
import type { GroupCreation } from "../lib/types"

interface Props {
    updateRequests: (endpoint: string, body: any) => void
}

const GroupAdd = (props: Props) => {

    const [groupName, setGroupName] = useState('')
    const { updateRequests } = props
    useEffect(() => {
        saveGroup()
    }, [groupName])
    const saveGroup = () => {
        const body:GroupCreation = {
            name: groupName
        }
        updateRequests('/groups/users', body)
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