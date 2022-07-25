type Props = {
    name: string,
    status: string,
    description: string
}

const ProjectShort = ({name, status, description}: Props) => {
    return (
        <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                {name} &nbsp;
                {status}
            </div>
            <div className="collapse-content"> 
                {description}
            </div>
        </div>
    );
}

export default ProjectShort