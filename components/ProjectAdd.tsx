import { useState, FormEvent } from "react"
import { useRouter } from 'next/router'

const ProjectAdd = () => {

    const [projectName, setProjectName] = useState('')
    const router = useRouter()

    const saveProject = async () => {
        const response = await fetch('/api/project', {
            method: 'POST',
            body: JSON.stringify({ name: projectName }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status == 201) {
            router.reload(window.location.pathname)
        }
    }

    return (
        <div>
            <p className="text-2xl pb-4">Add Project</p>
            <div className="py-2">
                <input onChange={(e: FormEvent<HTMLInputElement>) => {setProjectName(e.currentTarget.value)}} type="text" placeholder="Project Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="flex w-full">
                <button onClick={saveProject} className="btn btn-primary ml-auto">Save</button>
            </div>
        </div>
    );
}

export default ProjectAdd