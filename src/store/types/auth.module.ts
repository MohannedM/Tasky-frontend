import * as actionTypes from '../actions/actionTypes';
export interface authState{
    id: string | null;
    token: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    error?: string | null;
    loading?: boolean;
}

export interface registerData{
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    password: string | null;
}

export interface loginData{
    email: string | null;
    password: string | null;
}

export type authDataType = registerData | loginData;

export interface authType{
    type: typeof actionTypes.AUTH;
    authData: authDataType;
    extension: 'register' | 'login';
}

export interface authStartType{
    type: typeof actionTypes.AUTH_START;
}

export interface authSuccessType{
    type: typeof actionTypes.AUTH_SUCCESS;
    authData: authState;
}

export interface authFailType{
    type: typeof actionTypes.AUTH_FAIL;
    error: string;
}

export interface checkAuthType{
    type: typeof actionTypes.CHECK_AUTH;
}

export interface setLogoutTimerType{
    type: typeof actionTypes.SET_LOGOUT_TIMER;
    expirationTime: number;
}

export interface clearAuthType{
    type: typeof actionTypes.CLEAR_AUTH;
}

export interface logoutType{
    type: typeof actionTypes.LOGOUT
}

export interface authResponseType{
    data: {
        user: {
            id: string;
            token: string;
            firstName: string;
            lastName: string;
            email: string;
        }
    }
}

export interface dismissAuthErrorType{
    type: typeof actionTypes.DISMISS_AUTH_ERROR
}

export type authAction =  authStartType | authFailType | authSuccessType | clearAuthType | dismissAuthErrorType;
