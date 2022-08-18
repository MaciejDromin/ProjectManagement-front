import React from "react"

type Props = {
    contentName: string,
    component: React.ReactNode
}

const Collapsable = ({ contentName, component }: Props) => {

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
       e.stopPropagation()
       e.preventDefault()
    }

    // TODO: Fix this collapsable propagation

    return (
        <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium" >
                {contentName}
            </div>
            <div className="collapse-content">
                {component}
            </div>
        </div>
    );
}

export default Collapsable