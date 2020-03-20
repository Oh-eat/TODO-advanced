import { combineReducers } from 'redux';
import todo from './todo';
import todolist from './todolist';
import auth from './auth';

const rootReducer = combineReducers({ todo, todolist, auth });

export default rootReducer;
