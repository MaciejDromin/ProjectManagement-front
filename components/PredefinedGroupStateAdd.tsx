import { useState, FormEvent } from "react"
import type { PredefinedGroupStateCreation } from "../lib/types"

type Props = {
    groupId:string
}

const PredefinedGroupStateAdd = ({groupId}:Props) => {

    const [predefinedGroupState, setPredefinedGroupState] = useState('')

    const saveProject = async () => {
        const body:PredefinedGroupStateCreation = {
            name: predefinedGroupState,
            groupId: groupId
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
            <p className="text-2xl pb-4">Add Predefined Group State</p>
            <div className="py-2">
                <input onChange={(e: FormEvent<HTMLInputElement>) => {setPredefinedGroupState(e.currentTarget.value)}} type="text" placeholder="Predefined Group State" className="input input-bordered w-full max-w-xs" />
            </div>
        </div>
    );
}

export default PredefinedGroupStateAdd