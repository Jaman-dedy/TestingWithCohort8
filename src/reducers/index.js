import uuid from 'uuid';
import initialState from '../store/initialState';
import * as types from '../actions-types';

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case types.CLEAR_TODO:
      return {
        ...state,
        todoForm: initialState.todoForm,
      };
    case types.CLEAR_TODOS:
      return {
        ...state,
        todosList: [],
      };
    case types.SET_TODO_INPUT:
      return {
        ...state,
        todoForm: {
          ...state.todoForm,
          [payload.name]: payload.value,
        },
      };
    case types.SET_ADDING_TO_DO:
      return {
        ...state,
        adding: payload,
      };
    case types.ADD_TO_DO:
      return {
        ...state,
        todosList: [...state.todosList, { ...payload, id: uuid.v4() }],
      };
    case types.SET_DELETING_TO_DO:
      return {
        ...state,
        todosList: state.todosList.map(todo => {
          if (todo.id === payload) {
            todo.deleting = true;
          }
          return todo;
        }),
      };
    case types.DELETE_TO_DO:
      return {
        ...state,
        todosList: state.todosList.filter(todo => todo.id !== payload),
      };
    case types.CHECK_TO_DO:
      return {
        ...state,
        todosList: state.todosList.map(todo => {
          if (todo.id === payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
