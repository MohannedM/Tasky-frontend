import * as authActionTypes from '../store/types/auth.module'
export interface authFormType{
    [inputType: string]: {
        value: string | null;
        minLength: number;
        maxLength: number;
        valid: boolean;
        touched: boolean;
        error: string | null;
    }
}

export interface taskyProps{
    isAuth: boolean,
    onCheckAuth: () => authActionTypes.checkAuthType
}

export interface registerProps{
    onRegister: (authData: authActionTypes.registerData) => authActionTypes.registerType;
}

export interface loginProps{
    onLogin: (authData: authActionTypes.loginData) => authActionTypes.loginType;
}

export interface connectAuthState{
    auth: authActionTypes.authState
}




// export interface loginProps{
//     onLogin: (authData: authActionTypes.registerData) => authActionTypes.registerType;
// }