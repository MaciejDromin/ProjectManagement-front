export type ProjectCreation = {
    name:string,
    description:string,
    groupId:string
}

export type GroupCreation = {
    name:string
}

export type PredefinedGroupStateCreation = {
    name:string,
    groupId:string
}

export type TaskPredefinedCreation = {
    name:string,
    description:string,
    predefinedGroupStateId:string
}