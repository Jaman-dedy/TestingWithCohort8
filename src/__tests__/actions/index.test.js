import {
  clearTodo,
  clearTodoS,
  setTodoInput,
  setAddingTodo,
  setDeletingTodo,
} from '../../actions/index';

describe('Actions', () => {
  it('Should call the action clearTodo', () => {
    expect(clearTodo()).toStrictEqual({ type: 'CLEAR_TODO' });
  });
  it('Should call the action clearTodos', () => {
    expect(clearTodoS()).toStrictEqual({ type: 'CLEAR_TODOS' });
  });
  it('Should call the action clearTodos', () => {
    const payload = {
      value: 'value',
    };
    expect(setTodoInput(payload)).toStrictEqual({
      type: 'SET_TODO_INPUT',
      payload,
    });
  });
});
