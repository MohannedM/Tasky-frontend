import { getUsersInfoType, getUsersInfoStartType, usersType, getUsersInfoSuccessType, getUsersInfoFailType, createTaskType, taskDataType, createTaskStartType, taskDataResponseType, createTaskSuccessType, createTaskFailType, getMyTasksType, getMyTasksStartType, getMyTasksSuccessType, getMyTasksFailType, getTasksCreatedType, getTasksCreatedStartType, getTasksCreatedSuccessType, getTasksCreatedFailType, getTaskType, getTaskStartType, getTaskSuccessType, getTaskFailType, deleteTaskType, deleteTaskStartType, deleteTaskSuccessType, deleteTaskFailType, dismissTasksErrorType, cleanTasksType } from "../types/tasks.module";
import { GET_USERS_INFO, GET_USERS_INFO_START, GET_USERS_INFO_SUCCESS, GET_USERS_INFO_FAIL, CREATE_TASK, CREATE_TASK_START, CREATE_TASK_SUCCESS, CREATE_TASK_FAIL, GET_MY_TASKS, GET_MY_TASKS_START, GET_MY_TASKS_SUCCESS, GET_MY_TASKS_FAIL, GET_TASKS_CREATED, GET_TASKS_CREATED_START, GET_TASKS_CREATED_SUCCESS, GET_TASKS_CREATED_FAIL, GET_TASK, GET_TASK_START, GET_TASK_SUCCESS, GET_TASK_FAIL, DELETE_TASK, DELETE_TASK_START, DELETE_TASK_SUCCESS, DELETE_TASK_FAIL, DISMISS_TASKS_ERROR, CLEAN_TASKS } from "./actionTypes";

export const getUsersInfo: (token: string | null) => getUsersInfoType = (token: string | null) => {
    return{
        type: GET_USERS_INFO,
        token
    }
}

export const getUsersInfoStart: () => getUsersInfoStartType = () => {
    return{
        type: GET_USERS_INFO_START,
    }
}

export const getUsersInfoSuccess: (users: usersType) => getUsersInfoSuccessType = (users: usersType) => {
    return{
        type: GET_USERS_INFO_SUCCESS,
        users
    }
}

export const getUsersInfoFail: (error: string) => getUsersInfoFailType = (error: string) => {
    return{
        type: GET_USERS_INFO_FAIL,
        error
    }
}

export const createTask: (token: string | null, taskData: taskDataType) => createTaskType = (token: string | null, taskData: taskDataType) => {
    return{
        type: CREATE_TASK,
        token,
        taskData
    }
}

export const createTaskStart: () => createTaskStartType = () => {
    return{
        type: CREATE_TASK_START
    }
}

export const createTaskSuccess: (taskData: taskDataResponseType) => createTaskSuccessType = (taskData: taskDataResponseType) => {
    return{
        type: CREATE_TASK_SUCCESS,
        taskData
    }
}

export const createTaskFail: (error: string) => createTaskFailType = (error: string) => {
    return{
        type: CREATE_TASK_FAIL,
        error
    }
}

export const getMyTasks: (token: string | null) => getMyTasksType = (token: string | null) => {
    return{
        type: GET_MY_TASKS,
        token
    }
}

export const getMyTasksStart: () => getMyTasksStartType = () => {
    return{
        type: GET_MY_TASKS_START
    }
}

export const getMyTasksSuccess: (tasksData: taskDataResponseType[]) => getMyTasksSuccessType = (tasksData: taskDataResponseType[]) => {
    return{
        type: GET_MY_TASKS_SUCCESS,
        tasksData
    }
}

export const getMyTasksFail: (error: string) => getMyTasksFailType = (error: string) => {
    return{
        type: GET_MY_TASKS_FAIL,
        error
    }
}

export const getTasksCreated: (token: string | null) => getTasksCreatedType = (token: string | null) => {
    return{
        type: GET_TASKS_CREATED,
        token
    }
}

export const getTasksCreatedStart: () => getTasksCreatedStartType = () => {
    return{
        type: GET_TASKS_CREATED_START
    }
}

export const getTasksCreatedSuccess: (tasksData: taskDataResponseType[]) => getTasksCreatedSuccessType = (tasksData: taskDataResponseType[]) => {
    return{
        type: GET_TASKS_CREATED_SUCCESS,
        tasksData
    }
}

export const getTasksCreatedFail: (error: string) => getTasksCreatedFailType = (error: string) => {
    return{
        type: GET_TASKS_CREATED_FAIL,
        error
    }
}

export const getTask: (token: string | null, task_id: string) => getTaskType = (token: string | null, task_id: string) => {
    return{
        type: GET_TASK,
        task_id,
        token
    }
}

export const getTaskStart: () => getTaskStartType = () => {
    return{
        type: GET_TASK_START
    }
}

export const getTaskSuccess: (taskData: taskDataResponseType) => getTaskSuccessType = (taskData: taskDataResponseType) => {
    return{
        type: GET_TASK_SUCCESS,
        taskData
    }
}

export const getTaskFail: (error: string) => getTaskFailType = (error: string) => {
    return{
        type: GET_TASK_FAIL,
        error
    }
}

export const deleteTask: (token: string | null, task_id: string) => deleteTaskType = (token: string | null, task_id: string) => {
    return{
        type: DELETE_TASK,
        task_id,
        token
    }
}

export const deleteTaskStart: () => deleteTaskStartType = () => {
    return{ 
        type: DELETE_TASK_START
    }
}

export const deleteTaskSuccess: (task_id: string) => deleteTaskSuccessType = (task_id: string) => {
    return{
        type: DELETE_TASK_SUCCESS,
        task_id
    }
}

export const deleteTaskFail: (error: string) => deleteTaskFailType = (error: string) => {
    return{
        type: DELETE_TASK_FAIL,
        error
    }
}

export const dismissTasksError: () => dismissTasksErrorType = () =>{
    return{
        type: DISMISS_TASKS_ERROR
    }
}

export const cleanTasks: () => cleanTasksType = () => {
    return{
        type: CLEAN_TASKS
    }
}