import {takeEvery} from 'redux-saga/effects';
import {registerSaga, setLogoutTimerSaga, checkAuthSaga, loginSaga} from './auth';
import * as actionTypes from '../actions/actionTypes';

export function* authSagas(){
    yield takeEvery(actionTypes.REGISTER, registerSaga);
    yield takeEvery(actionTypes.SET_LOGOUT_TIMER, setLogoutTimerSaga);
    yield takeEvery(actionTypes.CHECK_AUTH, checkAuthSaga);
    yield takeEvery(actionTypes.LOGIN, loginSaga);
}