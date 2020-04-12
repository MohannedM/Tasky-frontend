import { applyMiddleware, createStore, combineReducers } from 'redux';
import {authSagas} from './sagas/index';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducers = combineReducers({
    auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(authSagas);
