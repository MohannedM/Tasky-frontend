import { tasksState, tasksAction } from "../types/tasks.module";
import * as actionTypes from '../actions/actionTypes';

const initialState: tasksState = {
    myTasks: [],
    createdTasks: [],
    loading: false,
    error: null,
    users: null,
    task: null,
    deleteLoading: false,
    createRedirect: false 
}

const tasksReducer: (state: tasksState, action: tasksAction) => tasksState = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_USERS_INFO_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.users
            }
        case actionTypes.GET_USERS_INFO_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.CREATE_TASK_START:
            return{
                ...state,
                loading: true
            }
            case actionTypes.CREATE_TASK_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    createRedirect: true
                }
            case actionTypes.CREATE_TASK_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.error
                }
            case actionTypes.GET_MY_TASKS_START: 
                return{
                    ...state,
                    loading: true,
                    myTasks: [],
                    createRedirect: false
                }
            case actionTypes.GET_MY_TASKS_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    myTasks: state.myTasks.concat(action.tasksData)
                }
            case actionTypes.GET_MY_TASKS_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.error
                }
            case actionTypes.GET_TASKS_CREATED_START:
                return{
                    ...state,
                    createdTasks: [],
                    loading: true,
                    createRedirect: false
                }
            case actionTypes.GET_TASKS_CREATED_SUCCESS:
                return{
                    ...state,
                    createdTasks: state.createdTasks.concat(action.tasksData),
                    loading: false
                }
            case actionTypes.GET_TASKS_CREATED_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.error
                }
            case actionTypes.GET_TASK_START:
                return{
                    ...state,
                    loading: true,
                    task: null,
                    createRedirect: false
                }
            case actionTypes.GET_TASK_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    task: action.taskData
                }
            case actionTypes.GET_TASK_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.error
                }
            case actionTypes.DELETE_TASK_START:
                return{
                    ...state,
                    deleteLoading: true
                }
            case actionTypes.DELETE_TASK_SUCCESS:
                const createdTasks = [...state.createdTasks];
                const taskIndex = createdTasks.findIndex(task => task._id === action.task_id);
                createdTasks.splice(taskIndex, 1);
                return{
                    ...state,
                    createdTasks,
                    deleteLoading: false
                }
            case actionTypes.DELETE_TASK_FAIL:
                return{
                    ...state,
                    error: action.error,
                    deleteLoading: false
                }
            case actionTypes.DISMISS_TASKS_ERROR:
                return{
                    ...state,
                    error: null
                }
            case actionTypes.CLEAN_TASKS:
                return{
                    ...state,
                    myTasks: [],
                    createdTasks: []
                }
            case actionTypes.CLEAR_AUTH:
                return{
                    myTasks: [],
                    createdTasks: [],
                    loading: false,
                    error: null,
                    users: null,
                    task: null,
                    deleteLoading: false,
                    createRedirect: false 
                }
        default: return state;
    }
}

export default tasksReducer;