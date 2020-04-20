import * as tasksActionTypes from '../../../store/types/tasks.module'
export interface createTaskProps{
    token: string | null;
    users: tasksActionTypes.usersType;
    onGetUsersInfo: (token: string | null) => tasksActionTypes.getUsersInfoType;
    loading?: boolean;
    onCreateTask: (token: string | null, taskData: tasksActionTypes.taskDataType) => tasksActionTypes.createTaskType;
    createRedirect?: boolean;
}
