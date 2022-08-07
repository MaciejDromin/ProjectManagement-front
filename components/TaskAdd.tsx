import { useState, FormEvent } from "react"
import type { TaskPredefinedCreation } from "../lib/types"

type Props = {
    predefinedGroupStateId:string
}

const TaskAdd = ({predefinedGroupStateId}:Props) => {

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const saveProject = async () => {
        const body:TaskPredefinedCreation = {
            name: taskName,
            description: taskDescription,
            predefinedGroupStateId: predefinedGroupStateId
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
            <p className="text-2xl pb-4">Add Task</p>
            <div className="py-2">
                <div>
                    <input onChange={(e: FormEvent<HTMLInputElement>) => {setTaskName(e.currentTarget.value)}} 
                        type="text"
                        placeholder="Task Name"
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="py-2">
                    <input onChange={(e: FormEvent<HTMLInputElement>) => {setTaskDescription(e.currentTarget.value)}} 
                        type="text" 
                        placeholder="Task Description" 
                        className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
}

export default TaskAdd