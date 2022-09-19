import Collapsable from "../../components/Collapsable";
import Heading from "../../components/Heading";
import SmallHeading from "../../components/SmallHeading";
import StatesList from "../../components/StatesList";
import TextDisplay from "../../components/TextDisplay";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Project } from "../../lib/types";

const ProjectDetailed = () => {

    const [project, setProject] = useState<Project>(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const { projectId } = router.query

    useEffect(() => {
        if (!projectId) {
            return
        }
        setLoading(true)
        fetch('/api/projects/' + projectId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res) => res.json())
            .then((data) => {
                setProject(data)
                setLoading(false)
            })
    }, [projectId])

    return (
        <div>
            {!isLoading && project !== null &&
                <div>
                    <Heading title={project.name} />
                    <SmallHeading title={project.status} />
                    <TextDisplay text={project.description} />
                    <Collapsable contentName="States" component={<StatesList statesList={project.states} />} />
                </div>
            }
        </div>
    );
}

export default ProjectDetailed