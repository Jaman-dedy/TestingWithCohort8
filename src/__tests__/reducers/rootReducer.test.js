import reducers from '../../reducers';
import * as types from '../../actions-types';
import initialState from '../../store/initialState';

describe('reducers', () => {
  test('should return the initial state', () => {
    expect(reducers({}, undefined)).toEqual({});
  });

  test(`should handle ${types.CLEAR_TODO}`, () => {
    const action = {
      type: types.CLEAR_TODO,
    };
    expect(reducers({}, action)).toEqual({ todoForm: initialState.todoForm });
  });
});
