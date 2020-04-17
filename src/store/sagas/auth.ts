import {put, delay} from 'redux-saga/effects';
import { authSuccess, authFail} from '../actions';
import {checkAuthType, setLogoutTimerType, authType, logoutType, authResponseType} from '../types/auth.module';
import axios from 'axios';
import { clearAuth, setLogoutTimer, authStart, logout } from '../actions/auth';

export function* authSaga(action: authType){
    yield put(authStart());
    try{
        const response: authResponseType = yield axios.post("http://127.0.0.1:8080/auth/" + action.extension,{
            ...action.authData
        });
        const expirationTime = new Date().getTime() + (3600*1000);
        yield localStorage.setItem("id", response.data.user.id);
        yield localStorage.setItem("token", response.data.user.token);
        yield localStorage.setItem("firstName", response.data.user.firstName);
        yield localStorage.setItem("lastName", response.data.user.lastName);
        yield localStorage.setItem("email", response.data.user.email);
        yield localStorage.setItem("expirationTime", expirationTime.toString());
        
        yield put(authSuccess({
            id: response.data.user.id,
            token: response.data.user.token,
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
            email: response.data.user.email
        }));
        yield put(setLogoutTimer(expirationTime));

    }catch(err){
        yield put(authFail(err.response.data.message));
    }
}

export function* checkAuthSaga(action: checkAuthType){
    const fetchedExpTime = yield localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime()
    if(+fetchedExpTime < currentTime){
        yield put(logout());
        return;
    }
    const id = yield localStorage.getItem("id");
    const token = yield localStorage.getItem("token");
    const firstName = yield localStorage.getItem("firstName");
    const lastName = yield localStorage.getItem("lastName");
    const email = yield localStorage.getItem("email");
    if(!token || !email || !firstName){
        yield put(logout());
        return;
    }
    yield put(authSuccess({
        id,
        token,
        firstName,
        lastName,
        email
    }));
    yield put(setLogoutTimer(+fetchedExpTime));
}

export function* setLogoutTimerSaga(action: setLogoutTimerType){
    const currentTime = new Date().getTime()
    yield delay(action.expirationTime - currentTime);
    yield put(logout());
} 

export function* logoutSaga(action: logoutType){
    yield put(clearAuth());
    yield localStorage.removeItem("id");
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("firstName");
    yield localStorage.removeItem("lastName");
    yield localStorage.removeItem("email");
    yield localStorage.removeItem("expirationTime");
}