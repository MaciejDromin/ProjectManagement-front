import React from "react"

type Props = {
    contentName: string,
    component: React.ReactNode
}

const Collapsable = ({ contentName, component }: Props) => {

    return (
        <div tabindex="0" className={'collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'}>
            <input type="checkbox" />
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