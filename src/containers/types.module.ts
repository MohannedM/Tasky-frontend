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
    isAuth: boolean;
    firstName: string | null;
    lastName?: string | null;
    onCheckAuth: () => authActionTypes.checkAuthType;
}

export interface registerProps{
    isAuth: boolean;
    onRegister: (authData: authActionTypes.registerData) => authActionTypes.authType;
}

export interface loginProps{
    isAuth: boolean;
    onLogin: (authData: authActionTypes.loginData) => authActionTypes.authType;
}


export interface logoutProps{
    onLogout: () => authActionTypes.logoutType;
}

export interface navbarProps{
    isAuth: boolean;
    first_name: string | null;
    last_name?: string | null;
}

export interface connectAuthState{
    auth: authActionTypes.authState
}






// export interface loginProps{
//     onLogin: (authData: authActionTypes.registerData) => authActionTypes.registerType;
// }