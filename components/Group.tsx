import React, { useEffect, useState } from "react"
import Popup from "./Popup"
import ProjectAdd from "./ProjectAdd"
import ProjectShort from "./ProjectShort"

type Project = {
    id: string,
    name: string,
    description: string,
    status: string
}

type Props = {
    id:string, 
    name:string
}

const Group = ({id, name}: Props) => {

    const [projects, setProjects] = useState<Project[]>(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // TODO: change to fetch only projects within Group
        fetch('/api/projects', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => res.json())
        .then((data) => {
            setProjects(data)
            setLoading(false)
        })
    }, [])

    return (
        <section className="mb-4">
            <div className="flex w-2/6 mb-3 items-center">
                <div className="grid h-10 flex-grow card bg-base-300 rounded-box place-items-center">
                    {name}
                </div>
                <div className="divider sm:divider-horizontal"></div>
                <Popup buttonName="Create Project" childComp={<ProjectAdd groupId={id}/>} />
            </div>
            <div>
                {!isLoading && projects !== null && <div>{projects.map(project => {
                    return (
                        <ProjectShort key={project.id} name={project.name} status={project.status} description={project.description} id={project.id} />
                    )
                })}</div>}
            </div>
        </section>
    )
}

export default Group