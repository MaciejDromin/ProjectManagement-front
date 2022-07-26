import { useRouter } from 'next/router'

type Props = {
    id: string,
    name: string,
    status: string,
    description: string
}

const ProjectShort = ({id, name, status, description}: Props) => {

    const router = useRouter()

    const deleteProject = async () => {
        const response = await fetch('/api/project?id='+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status == 200) {
            router.reload(window.location.pathname)
        }
    }

    return (
        <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
            <div className="collapse-title text-xl font-medium">
                {name} &nbsp;
                {status} &nbsp;
                <div onClick={deleteProject} className="btn btn-error">
                    Delete
                </div>
            </div>
            <div className="collapse-content"> 
                {description}
            </div>
        </div>
    );
}

export default ProjectShort