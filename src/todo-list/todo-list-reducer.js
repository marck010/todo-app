import {
    SET_TASK_TODO,
    SET_TASK_DOING,
    SET_TASK_DONE,
    REMOVE_TASK_TODO,
    REMOVE_TASK_DOING,
    REMOVE_TASK_DONE
} from './todo-list-actions';

const INITIAL_STATE = {
    todoTasks: [],
    doingTasks: [],
    doneTasks: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TASK_TODO:
            return { ...state, todoTasks: [...state.todoTasks, action.payload] };

        case SET_TASK_DOING:
            return { ...state, doingTasks: [...state.doingTasks, action.payload] };

        case SET_TASK_DONE:
            return { ...state, doneTasks: [...state.doneTasks, action.payload] };

        case REMOVE_TASK_TODO:
            state.todoTasks.splice(action.payload, 1);
            return { ...state, todoTasks: [...state.todoTasks] };

        case REMOVE_TASK_DOING:
            state.doingTasks.splice(action.payload, 1);
            return { ...state, doingTasks: [...state.doingTasks] };

        case REMOVE_TASK_DONE:
            state.doneTasks.splice(action.payload, 1);
            return { ...state, doneTasks: [...state.doneTasks] };

        default:
            return { ...state };
    }
};