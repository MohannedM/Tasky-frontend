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

export interface registerType{
    type: typeof actionTypes.REGISTER;
    authData: registerData;
}


export interface registerStartType{
    type: typeof actionTypes.REGISTER_START;
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

export interface loginType{
    type: typeof actionTypes.LOGIN;
    authData: loginData;
}

export interface loginStartType{
    type: typeof actionTypes.LOGIN_START;
}

export interface loginData{
    email: string | null;
    password: string | null;
}

export type registerAction = registerType | registerStartType | authFailType | authSuccessType | clearAuthType | loginStartType | loginType;
