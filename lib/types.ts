export type ProjectCreation = {
    name:string,
    description:string,
    groupId:number
}

export type GroupCreation = {
    name:string
}

export type PredefinedGroupStateCreation = {
    name:string
}

export type TaskPredefinedCreation = {
    name:string,
    description:string
}

export type Task = {
    id: number,
    name: string,
    description: string,
    finished: boolean
}

export type State = {
    id: number,
    name: string,
    completed: boolean
    tasks: Task[]
}

export type Project = {
    id: number,
    name: string,
    description: string,
    status: string,
    states: State[]
}