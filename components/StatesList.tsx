import Collapsable from "./Collapsable"
import Heading from "./Heading"
import TasksList from "./TasksList"
import type { State } from "../lib/types"

type Props = {
    statesList: State[]
}

const StatesList = ({ statesList }: Props) => {

    return (
        <>
            {statesList.map(state => {
                return (
                    <>
                        <div className="flex items-center">
                            <div className="flex-1">
                                <div className="btn normal-case text-xl">{state.name}</div>
                            </div>
                            <div className="flex-none gap-2">
                                <div className="btn normal-case text-xl">{state.completed ? "Completed" : "In Progress"}</div>
                            </div>
                        </div>
                        {state.tasks.map(task => {
                            return (
                                <div className="my-4">
                                    <Collapsable contentName="Tasks" component={<TasksList taskList={state.tasks}/>}/>
                                </div>
                            )
                        })}
                    </>
                )
            })}
        </>
    );
}

export default StatesList