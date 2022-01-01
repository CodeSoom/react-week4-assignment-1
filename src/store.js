import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todo';

const rootReducer = combineReducers({ todo: todoReducer });

const store = createStore(rootReducer);

export default store;
