import {takeEvery} from 'redux-saga/effects';
import {authSaga, setLogoutTimerSaga, checkAuthSaga, logoutSaga} from './auth';
import {getUsersInfoSaga, createTaskSaga, getTasksCreatedSaga, getMyTasksSaga, getTaskSaga, deleteTaskSaga} from './tasks';
import * as actionTypes from '../actions/actionTypes';

export function* authSagas(){
    yield takeEvery(actionTypes.AUTH, authSaga);
    yield takeEvery(actionTypes.SET_LOGOUT_TIMER, setLogoutTimerSaga);
    yield takeEvery(actionTypes.CHECK_AUTH, checkAuthSaga);
    yield takeEvery(actionTypes.LOGOUT, logoutSaga);
}

export function* tasksSaga(){
    yield takeEvery(actionTypes.CREATE_TASK, createTaskSaga);
    yield takeEvery(actionTypes.GET_USERS_INFO, getUsersInfoSaga);
    yield takeEvery(actionTypes.GET_TASKS_CREATED, getTasksCreatedSaga);
    yield takeEvery(actionTypes.GET_MY_TASKS, getMyTasksSaga);
    yield takeEvery(actionTypes.GET_TASK, getTaskSaga);
    yield takeEvery(actionTypes.DELETE_TASK, deleteTaskSaga);
}