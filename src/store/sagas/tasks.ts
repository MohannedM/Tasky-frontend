import {put} from 'redux-saga/effects';
import { getUsersInfoType, usersInfoResponseType, createTaskType, taskResponseType, getMyTasksType, taskIndexResponseType, getTasksCreatedType, getTaskType, deleteTaskType } from '../types/tasks.module';
import { getUsersInfoFail, getUsersInfoSuccess, createTaskStart, createTaskFail, createTaskSuccess, getMyTasksStart, getMyTasksFail, getMyTasksSuccess, getTasksCreatedStart, getTasksCreatedFail, getTasksCreatedSuccess, getTaskStart, getTaskFail, getTaskSuccess, deleteTaskStart, deleteTaskFail, deleteTaskSuccess } from '../actions';
import axios from 'axios';

export function* getUsersInfoSaga(action: getUsersInfoType){
    try{
        const response: usersInfoResponseType = yield axios.get("http://127.0.0.1:8080/auth/usernames", {
            headers: {
                "Authorization": "Bearer " + action.token
            }
        });
        yield put(getUsersInfoSuccess(response.data.users));
    }catch(err){    
        yield put(getUsersInfoFail(err.response.data.message));
    }
}

export function* createTaskSaga(action: createTaskType){
    yield put(createTaskStart());
    try{
        const response: taskResponseType = yield axios.post("http://127.0.0.1:8080/tasks", {
            title: action.taskData.title,
            due_date: action.taskData.dueDate,
            description: action.taskData.description,
            assigned_to: action.taskData.assignedTo
        }, {
            headers: {
                "Authorization": "Bearer " + action.token
            }
        });
        yield put(createTaskSuccess(response.data.task));
    }catch(err){
        yield put(createTaskFail(err.response.data.message));
    }
}

export function* getMyTasksSaga(action: getMyTasksType){
    yield put(getMyTasksStart());
    try{
        const response: taskIndexResponseType = yield axios.get("http://127.0.0.1:8080/tasks/assigned", {
            headers: {
                "Authorization": "Bearer " + action.token
            }
        });
        yield put(getMyTasksSuccess(response.data.tasks));
    }catch(err){
        yield put(getMyTasksFail(err.response.data.message));
    }
}

export function* getTasksCreatedSaga(action: getTasksCreatedType){
    yield put(getTasksCreatedStart());
    try{
        const response: taskIndexResponseType = yield axios.get("http://127.0.0.1:8080/tasks/created", {
            headers: {
                "Authorization": "Bearer " + action.token
            }
        });
        yield put(getTasksCreatedSuccess(response.data.tasks));
    }catch(err){
        yield put(getTasksCreatedFail(err.response.data.message));
    }
}

export function* getTaskSaga(action: getTaskType){
    yield put(getTaskStart());
    try{
        const response: taskResponseType = yield axios.get("http://127.0.0.1:8080/tasks/" + action.task_id, {
            headers: {
                "Authorization": "Bearer " + action.token
            }
        });
        yield put(getTaskSuccess(response.data.task));
    }catch(err){
        yield put(getTaskFail(err.response.data.message));
    }
}

export function* deleteTaskSaga(action: deleteTaskType){
    yield put(deleteTaskStart());
    try{
        yield axios.delete("http://127.0.0.1:8080/tasks/" + action.task_id, {
            headers: {
                "Authorization": "Bearer " + action.token
            }
        });
        yield put(deleteTaskSuccess(action.task_id));
    }catch(err){
        yield put(deleteTaskFail(err.response.data.message));
    }
}