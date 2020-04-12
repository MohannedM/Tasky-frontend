import {takeEvery} from 'redux-saga/effects';
import {authSaga, setLogoutTimerSaga, checkAuthSaga, logoutSaga} from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* authSagas(){
    yield takeEvery(actionTypes.AUTH, authSaga);
    yield takeEvery(actionTypes.SET_LOGOUT_TIMER, setLogoutTimerSaga);
    yield takeEvery(actionTypes.CHECK_AUTH, checkAuthSaga);
    yield takeEvery(actionTypes.LOGOUT, logoutSaga);
}