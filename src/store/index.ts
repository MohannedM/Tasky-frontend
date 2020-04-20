import { applyMiddleware, createStore, combineReducers } from 'redux';
import {authSagas, tasksSaga} from './sagas/index';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/auth';
import tasksReducer from './reducers/tasks';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducers = combineReducers({
    auth: authReducer,
    tasks: tasksReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(authSagas);
sagaMiddleware.run(tasksSaga);
