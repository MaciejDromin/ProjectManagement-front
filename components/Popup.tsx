import React from "react"

interface ParentCompProps {
    popUpFor: string,
    buttonName: string,
    childComp?: React.ReactNode
}

const Popup: React.FC<ParentCompProps> = (props) => {
    const { popUpFor, buttonName, childComp } = props
    return (
        <div key={popUpFor}>
            <label htmlFor={"my-modal-"+popUpFor} className="btn modal-button">{buttonName}</label>
            <input type="checkbox" id={"my-modal-"+popUpFor} className="modal-toggle" />
            <label htmlFor={"my-modal-"+popUpFor} className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    {childComp}
                </label>
            </label>
        </div>
    )
}

export default Popup