import { useState, FormEvent } from "react"
import { useRouter } from 'next/router'
import type { ProjectCreation } from "../lib/types"

type Props = {
    groupId: number
}

const ProjectAdd = (props:Props) => {

    const {groupId} = props

    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const router = useRouter()

    const saveProject = async () => {
        const body:ProjectCreation = {
            name: projectName,
            description: projectDescription,
            groupId
        }
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        if (response.status == 201) {
            router.reload()
        }
    }

    return (
        <div key={groupId}>
            <p className="text-2xl pb-4">Add Project</p>
            <div className="py-2">
                <input onChange={(e: FormEvent<HTMLInputElement>) => {setProjectName(e.currentTarget.value)}} type="text" placeholder="Project Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="py-2">
                <input onChange={(e: FormEvent<HTMLInputElement>) => {setProjectDescription(e.currentTarget.value)}} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="flex w-full">
                <button onClick={saveProject} className="btn btn-primary ml-auto">Save</button>
            </div>
        </div>
    );
}

export default ProjectAdd