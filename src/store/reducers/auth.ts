import * as actionTypes from '../actions/actionTypes';
import {authState, authAction} from '../types/auth.module';
const initialState: authState  = {
    id: null,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    error: null,
    loading: false
}

const authReducer: (state: authState, action: authAction) => authState = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                id: action.authData.id,
                token: action.authData.token,
                firstName: action.authData.firstName,
                lastName: action.authData.lastName,
                email: action.authData.email,
                error: null,
                loading: false 
            };
        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.CLEAR_AUTH:
            return{
                id: null,
                token: null,
                firstName: null,
                lastName: null,
                email: null,
                error: null,
                loading: false
            }
        default:
            return state;
    }
}

export default authReducer