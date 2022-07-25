const ProjectAdd = () => {
    return (
        <div>
            <p className="text-2xl pb-4">Add Project</p>
            <div className="py-2">
                <input type="text" placeholder="Project Name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="flex w-full">
                <button className="btn btn-primary ml-auto">Save</button>
            </div>
        </div>
    );
}

export default ProjectAdd