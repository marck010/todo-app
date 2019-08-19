export const REMOVE_TASK = 'todo/REMOVE_TASK';
export const SET_TASK = 'todo/SET_TITLE';
export const SET_TASK_TODO = 'todo/SET_TASK_TODO';
export const SET_TASK_DOING = 'todo/SET_TASK_DOING';
export const SET_TASK_DONE = 'todo/SET_TASK_DONE';
export const REMOVE_TASK_TODO = 'todo/REMOVE_TASK_TODO';
export const REMOVE_TASK_DOING = 'todo/REMOVE_TASK_DOING';
export const REMOVE_TASK_DONE = 'todo/REMOVE_TASK_DONE';

export const setTask = (title, description, type) => {

  console.log(type, { title, description })

  return {
    type: type,
    payload: { title, description }
  };

}

export const removeTask = (taskIndex, type) => {

  console.log(type, taskIndex)

  return {
    type: type,
    payload: taskIndex
  };

}