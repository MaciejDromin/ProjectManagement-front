interface ParentCompProps {
    updateIsOpened:() => void
    buttonName: string,
    childComp?: React.ReactNode
}

const PopupWithExitButton: React.FC<ParentCompProps> = (props) => {
    const { updateIsOpened, buttonName, childComp } = props;
    return (
        <div>
            <label onClick={updateIsOpened} htmlFor="my-modal-3" className="btn modal-button rounded-md bg-slate-700">{buttonName}</label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={updateIsOpened} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {childComp}
            </div>
            </div>
        </div>
    )
}

export default PopupWithExitButton