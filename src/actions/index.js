import * as types from '../actions-types';

export const clearTodo = () => ({
  type: types.CLEAR_TODO,
});

export const clearTodoS = () => ({
  type: types.CLEAR_TODOS,
});

export const setTodoInput = payload => ({
  type: types.SET_TODO_INPUT,
  payload,
});

export const setAddingTodo = payload => ({
  type: types.SET_ADDING_TO_DO,
  payload,
});

export const setDeletingTodo = payload => ({
  type: types.SET_DELETING_TO_DO,
  payload,
});

export const addTodo = payload => ({
  type: types.ADD_TO_DO,
  payload,
});

export const deleteTodo = payload => ({
  type: types.DELETE_TO_DO,
  payload,
});

export const checkTodo = payload => ({
  type: types.CHECK_TO_DO,
  payload,
});
