import type { Task } from "../lib/types"

type Props = {
    taskList: Task[]
}

const TasksList = ({ taskList }: Props) => {

    return (
        <>
            {taskList.map(task => {
                return (
                    <>
                        <div key={task.id} className="flex flex-wrap items-center">
                            <div className="flex-1">
                                <div className="btn normal-case text-xl">{task.name}</div>
                            </div>
                            <div className="flex-none gap-2">
                                <div className="btn normal-case text-xl">{task.finished ? "Completed" : "In Progress"}</div>
                            </div>
                            <div className="basis-full">
                                {task.description}
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    );
}

export default TasksList