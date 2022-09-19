import { useState, useEffect, FormEvent } from "react"
import type { TaskPredefinedCreation } from "../lib/types"

interface Props {
    updateRequests: (endpoint: string, body: any) => void
}

const TaskAdd = (props:Props) => {

    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const { updateRequests } = props
    useEffect(() => {
        saveTask()
    }, [taskName, taskDescription])
    const saveTask = () => {
        const body:TaskPredefinedCreation = {
            name: taskName,
            description: taskDescription
        }
        updateRequests('/tasks/predefinedgroupstates/', body)
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