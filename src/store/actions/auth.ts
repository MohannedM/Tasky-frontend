import * as actionTypes from './actionTypes';
import { authSuccessType, authState, authFailType, checkAuthType, setLogoutTimerType, clearAuthType, authType, authDataType, authStartType, logoutType, dismissAuthErrorType} from '../types/auth.module';

export const auth: (authData: authDataType, extension: 'register' | 'login') => authType = (authData: authDataType, extension: 'register' | 'login') => {
    return{
        type: actionTypes.AUTH,
        authData,
        extension
    }
}

export const authStart: () => authStartType = () => {
    return{
        type: actionTypes.AUTH_START
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

export const logout: () => logoutType = () => {
    return{
        type: actionTypes.LOGOUT
    }
}

export const dismissAuthError: () => dismissAuthErrorType = () => {
    return{
        type: actionTypes.DISMISS_AUTH_ERROR
    }
}
