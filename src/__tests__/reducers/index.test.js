import {
  CLEAR_TODO,
  CLEAR_TODOS,
  SET_TODO_INPUT,
  SET_ADDING_TO_DO,
  SET_DELETING_TO_DO,
} from '../../actions-types/index';

import todo from '../../reducers/index';
import initialState from '../../store/initialState';

describe('Reducers', () => {
  it('should update the state when calling CLEAR_TODO', () => {
    const payload = {
      text: '',
      done: false,
      deleting: false,
    };
    const newState = todo(initialState, {
      type: CLEAR_TODO,
      payload,
    });
    expect(newState.todoForm).toEqual(payload);
  });
  it('should update the state when calling CLEAR_TODOS', () => {
    const payload = {
      id: '6d470672-d137-4333-9ed8-c4939f96b2a5',
      text: 'Testing hints',
      done: false,
      deleting: false,
    };
    const newState = todo(initialState, {
      type: CLEAR_TODOS,
      payload,
    });
    expect(newState.todosList).toEqual([]);
  });
  it('should update the state when calling SET_TODO_INPUT', () => {
    const payload = {
      text: '',
      done: false,
      deleting: false,
    };
    const newState = todo(initialState, {
      type: SET_TODO_INPUT,
      payload,
    });
    expect(newState.todoForm).toEqual(payload);
  });
  it('should update the state when calling SET_DELETING_TO_DO', () => {
    const payload = '6d470672-d137-4333-9ed8-c4939f96b2a5';
    const newState = todo(initialState, {
      type: SET_DELETING_TO_DO,
      payload,
    });
    expect(newState.todosList[0].id).toEqual(payload);
  });
});
