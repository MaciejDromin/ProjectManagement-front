import React from "react"
import Popup from "./Popup"
import ProjectAdd from "./ProjectAdd"
import ProjectShort from "./ProjectShort"

type Props = {
    name: string
}

const Group = ({name}: Props) => {
    return (
        <section className="mb-4">
            <div className="flex w-2/6 mb-3 items-center">
                <div className="grid h-10 flex-grow card bg-base-300 rounded-box place-items-center">
                    {name}
                </div>
                <div className="divider sm:divider-horizontal"></div>
                <Popup buttonName="Create Project" childComp={<ProjectAdd />} />
            </div>
            <div>
                <ProjectShort name="Project" status="In Progress" description="Hello!" />
            </div>
        </section>
    )
}

export default Group