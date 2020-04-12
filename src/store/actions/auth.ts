import * as actionTypes from './actionTypes';
import {registerData, registerType, registerStartType, authSuccessType, authState, authFailType, checkAuthType, setLogoutTimerType, clearAuthType, loginData, loginType, loginStartType} from '../types/auth.module';

export const register: (authData: registerData) => registerType = (authData: registerData) => {
    return{
        type: actionTypes.REGISTER,
        authData
    }
}

export const registerStart: () => registerStartType = () => {
    return{
        type: actionTypes.REGISTER_START
    }
}

export const authSuccess: (authData: authState) => authSuccessType = (authData: authState) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData
    }
}

export const authFail: (error: string) => authFailType = (error: string) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const checkAuth: () => checkAuthType = () => {
    return{
        type: actionTypes.CHECK_AUTH
    }
}

export const setLogoutTimer: (expirationTime: number) => setLogoutTimerType = expirationTime => {
    return{
        type: actionTypes.SET_LOGOUT_TIMER,
        expirationTime
    }
}

export const clearAuth: () => clearAuthType = () => {
    return{
        type: actionTypes.CLEAR_AUTH
    }
}

export const login: (authData: loginData) => loginType = (authData) => {
    return{
        type: actionTypes.LOGIN,
        authData
    }
}

export const loginStart: () => loginStartType = () => {
    return{
        type: actionTypes.LOGIN_START
    }
}