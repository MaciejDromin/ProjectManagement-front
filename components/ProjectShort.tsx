import { useRouter } from 'next/router'
import Link from "next/link"
import Table from './Table'
import Button from './Button'

type Props = {
    id: string,
    name: string,
    status: string,
    description: string
}

const ProjectShort = ({id, name, status, description}: Props) => {

    const router = useRouter()

    const deleteProject = async () => {
        const response = await fetch('/api/projects?id='+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status == 200) {
            router.reload()
        }
    }

    return (
        <div id={id} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
            <div className="collapse-title text-xl font-medium">
                <Table childs={[
                    {
                        child: <Link href={"/projects/"+id}>
                            <a className='text-animation'>{name}</a>
                            </Link>,
                        cellStyle: ""
                    },
                    {
                        child: status,
                        cellStyle: "text-center"
                    },
                    {
                        child: <Button name="Delete" functionToExecute={deleteProject} definedStyles=" btn-error error-animation"/>,
                        cellStyle: "text-right"
                    }
                ]}/>
            </div>
            <div className="collapse-content"> 
                {description}
            </div>
        </div>
    );
}

export default ProjectShort