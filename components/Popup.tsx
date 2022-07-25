interface ParentCompProps {
    buttonName: string,
    childComp?: React.ReactNode
}

const Popup: React.FC<ParentCompProps> = (props) => {
    const { buttonName, childComp } = props;
    return (
        <div>
            <label htmlFor="my-modal-4" className="btn modal-button">{buttonName}</label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
                {childComp}
            </label>
            </label>
        </div>
    )
}

export default Popup