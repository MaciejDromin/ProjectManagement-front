import { useState, useEffect, FormEvent } from "react"
import type { PredefinedGroupStateCreation } from "../lib/types"

interface Props {
    updateRequests: (endpoint: string, body: any) => void
}

const PredefinedGroupStateAdd = (props:Props) => {

    const [predefinedGroupState, setPredefinedGroupState] = useState('')
    const { updateRequests } = props
    useEffect(() => {
        savePredefinedGroupState()
    }, [predefinedGroupState])
    const savePredefinedGroupState = () => {
        const body:PredefinedGroupStateCreation = {
            name: predefinedGroupState
        }
        updateRequests('/predefinedgroupstates/groups/', body)
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