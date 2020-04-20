import * as authActionTypes from '../store/types/auth.module'
import * as tasksActionTypes from '../store/types/tasks.module'
export interface validationFormType{
    [inputType: string]: {
        value: string;
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
    error?: string | null;
    onDismissError: () => authActionTypes.dismissAuthErrorType;
    loading?: boolean;
}

export interface loginProps{
    isAuth: boolean;
    onLogin: (authData: authActionTypes.loginData) => authActionTypes.authType;
    error?: string | null;
    onDismissError: () => authActionTypes.dismissAuthErrorType;
    loading?: boolean;
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
    auth: authActionTypes.authState;
}

export interface connectTasksState{
    tasks: tasksActionTypes.tasksState;
}

export interface connectAllState extends connectAuthState, connectTasksState{

}

export interface usersInfoResponse{
    users: null | {
     id?: string;
     name?: string;
 }[]
}






// export interface loginProps{
//     onLogin: (authData: authActionTypes.registerData) => authActionTypes.registerType;
// }