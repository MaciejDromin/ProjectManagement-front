import Popup from "./Popup"
import ProjectAdd from "./ProjectAdd"
import ProjectShort from "./ProjectShort"
import ShareGroup from "./ShareGroup"

type Project = {
    id: string,
    name: string,
    description: string,
    status: string
}

type Props = {
    id: number, 
    name: string,
    projects: Project[],
    owned: boolean
}

const Group = ({id, name, projects, owned}: Props) => {

    return (
        <section className="mb-4">
            <div className="flex mb-3">
                <div className="flex-1 items-center flex">
                    <h1 className="text-primary text-3xl">{name}</h1>
                </div>
                <div className="flex-none gap-2 flex">
                    {owned && <Popup key={id} popUpFor={"share-group-"+id} buttonName="Share Group" childComp={<ShareGroup groupId={id}/>} />}
                    {<Popup key={id} popUpFor={"create-project-"+id} buttonName="Create Project" childComp={<ProjectAdd key={id} groupId={id}/>} />}
                </div>
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