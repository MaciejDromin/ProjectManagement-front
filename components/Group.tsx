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
    id: number, 
    name: string,
    projects: Project[]
}

const Group = ({id, name, projects}: Props) => {

    return (
        <section className="mb-4">
            <div className="flex w-2/6 mb-3 items-center">
                <div className="grid h-10 flex-grow card bg-base-300 rounded-box place-items-center">
                    {name}
                </div>
                <div className="divider sm:divider-horizontal"></div>
                {<Popup key={id} popUpFor={"create-project-"+id} buttonName="Create Project" childComp={<ProjectAdd key={id} groupId={id}/>} />}
            </div>
            <div>
                {projects !== null && <div>{projects.map(project => {
                    return (
                        <ProjectShort key={project.id} name={project.name} status={project.status} description={project.description} id={project.id} />
                    )
                })}</div>}
            </div>
        </section>
    )
}

export default Group