import { createStore, combineReducers } from 'redux';
import TaskListReducer from '../todo-list/todo-list-reducer';

const reducers = combineReducers({
  taskList: TaskListReducer,
});

export default createStore(reducers);
