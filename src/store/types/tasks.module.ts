import * as actionTypes from '../actions/actionTypes';
import { clearAuthType } from './auth.module';
export interface getUsersInfoType{
    type: typeof actionTypes.GET_USERS_INFO,
    token: string | null;
}

export interface getUsersInfoStartType{
    type: typeof actionTypes.GET_USERS_INFO_START;
}

export type usersType = null | [{
    id: string;
    name: string;
}];

export interface getUsersInfoSuccessType{
    type: typeof actionTypes.GET_USERS_INFO_SUCCESS;
    users: usersType
}

export interface getUsersInfoFailType{
    type: typeof actionTypes.GET_USERS_INFO_FAIL;
    error: string;
}

export interface tasksState{
    loading: boolean;
    error: null | string;
    myTasks: taskDataResponseType[]; 
    createdTasks: taskDataResponseType[];
    users: usersType;
    task: taskDataResponseType | null;
    deleteLoading: boolean;
    createRedirect: boolean;
}

export interface usersInfoResponseType{
    data: {
        users: usersType;
    }
}

export interface taskDataType{
    title: string;
    description: string;
    dueDate: number;
    assignedTo?: string | null;
}

export interface taskDataResponseType{
    _id: string;
    title: string;
    description: string;
    dueDate: number;
    assignedTo?: {
        id: string;
        firstName: string;
        lastName: string;
    };
    createdBy: {
        id: string;
        firstName: string;
        lastName: string;
    }
    createdAt: string;
    updatedAt: string;
}

export interface taskResponseType{
    data: {
        task: taskDataResponseType
    }
}


export interface taskIndexResponseType{
    data: {
        tasks: taskDataResponseType[]
    }
}

export interface createTaskType{
    type: typeof actionTypes.CREATE_TASK;
    taskData: taskDataType;
    token: string | null;
}


export interface createTaskStartType{
    type: typeof actionTypes.CREATE_TASK_START;
}

export interface createTaskSuccessType{
    type: typeof actionTypes.CREATE_TASK_SUCCESS;
    taskData: taskDataResponseType;
}


export interface createTaskFailType{
    type: typeof actionTypes.CREATE_TASK_FAIL;
    error: string;
}

export interface getMyTasksType{
    type: typeof actionTypes.GET_MY_TASKS;
    token: string | null;
}

export interface getMyTasksStartType{
    type: typeof actionTypes.GET_MY_TASKS_START;
}

export interface getMyTasksSuccessType{
    type: typeof actionTypes.GET_MY_TASKS_SUCCESS;
    tasksData: taskDataResponseType[];
}

export interface getMyTasksFailType{
    type: typeof actionTypes.GET_MY_TASKS_FAIL;
    error: string;
}


export interface getTasksCreatedType{
    type: typeof actionTypes.GET_TASKS_CREATED;
    token: string | null;
}

export interface getTasksCreatedStartType{
    type: typeof actionTypes.GET_TASKS_CREATED_START;
}

export interface getTasksCreatedSuccessType{
    type: typeof actionTypes.GET_TASKS_CREATED_SUCCESS;
    tasksData: taskDataResponseType[];
}

export interface getTasksCreatedFailType{
    type: typeof actionTypes.GET_TASKS_CREATED_FAIL;
    error: string;
}

export interface getTaskType{
    type: typeof actionTypes.GET_TASK;
    token: string | null;
    task_id: string;
}

export interface getTaskStartType{
    type: typeof actionTypes.GET_TASK_START;
}

export interface getTaskSuccessType{
    type: typeof actionTypes.GET_TASK_SUCCESS;
    taskData: taskDataResponseType;
}

export interface getTaskFailType{
    type: typeof actionTypes.GET_TASK_FAIL;
    error: string;
}

export interface deleteTaskType{
    type: typeof actionTypes.DELETE_TASK;
    token: string | null;
    task_id: string;
}

export interface deleteTaskStartType{
    type: typeof actionTypes.DELETE_TASK_START;
}

export interface deleteTaskSuccessType{
    type: typeof actionTypes.DELETE_TASK_SUCCESS;
    task_id: string;
}

export interface deleteTaskFailType{
    type: typeof actionTypes.DELETE_TASK_FAIL;
    error: string;
}

export interface dismissTasksErrorType{
    type: typeof actionTypes.DISMISS_TASKS_ERROR
}

export interface cleanTasksType{
    type: typeof actionTypes.CLEAN_TASKS;
}

export type tasksAction = getUsersInfoType | getUsersInfoStartType | getUsersInfoSuccessType | getUsersInfoFailType | createTaskFailType | createTaskStartType | createTaskSuccessType
| getMyTasksType | getMyTasksSuccessType | getMyTasksStartType | getMyTasksFailType | getTasksCreatedFailType | getTasksCreatedStartType | getTasksCreatedSuccessType | cleanTasksType |
getTaskType | getTaskStartType | getTaskSuccessType | getTaskFailType | deleteTaskStartType | deleteTaskSuccessType | deleteTaskFailType | dismissTasksErrorType | clearAuthType;
