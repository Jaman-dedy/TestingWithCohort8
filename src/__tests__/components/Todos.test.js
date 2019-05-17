import React from 'react';
import { shallow, mount } from 'enzyme';
import { Todos } from '../../components/Todo/Todos';

let wrapper;
const props = {
  adding: false,
  todoForm: {
    text: 'text',
  },
  todosList: [
    {
      id: '6d470672-d137-4333-9ed8-c4939f96b2a5',
      text: 'Testing hints',
      done: false,
      deleting: false,
    },
  ],
  onAddTodo: jest.fn(),
  onAddingTodo: jest.fn(),
  onDeleteTodo: jest.fn(),
  onDeletingTodo: jest.fn(),
  onCheckTodo: jest.fn(),
  onClearTodo: jest.fn(),
  handleInput: jest.fn(),
};

jest.useFakeTimers();

describe('Todos.jsx', () => {
  test('should render', () => {
    wrapper = shallow(<Todos {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render `is-loading` on `adding button`', () => {
    const newProps = props;
    newProps.adding = true;
    wrapper = mount(<Todos {...props} />);

    expect(wrapper.props().adding).toBeTruthy();
  });

  describe('when clicking on `add button`', () => {
    test('should call `onAddingTodo`, `onAddTodo` and `onClearTodo`', () => {
      wrapper = mount(<Todos {...props} />);
      wrapper.find('#btn-add').simulate('click');
      jest.runAllTimers();

      expect(props.onAddingTodo).toHaveBeenCalled();
      expect(props.onAddTodo).toHaveBeenCalled();
      expect(props.onClearTodo).toHaveBeenCalled();
      expect(props.onAddingTodo).toHaveBeenCalledTimes(2);
    });

    test('should call `onAddingTodo`, `onAddTodo` and `onClearTodo`', () => {
      const newProps = props;
      newProps.todoForm.text = '';
      wrapper = mount(<Todos {...newProps} />);
      wrapper.find('#btn-add').simulate('click');

      expect(wrapper.props().todoForm.text).toBe('');
    });
  });

  describe('when clicking on `delete button`', () => {
    test('should call `onDeleteTodo` and `onDeletingTodo`', () => {
      wrapper = mount(<Todos {...props} />);
      wrapper.find('#btn-delete').simulate('click');
      jest.runAllTimers();

      expect(props.onDeletingTodo).toHaveBeenCalled();
      expect(props.onDeleteTodo).toHaveBeenCalled();
    });
  });

  describe('when clicking on `check button`', () => {
    test('should call `onCheckTodo`', () => {
      wrapper = mount(<Todos {...props} />);
      wrapper.find('#btn-check').simulate('click');
      expect(props.onCheckTodo).toHaveBeenCalled();
    });
  });

  describe('when typing in `text input`', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    test('should call `handleKeyDown`', () => {
      wrapper = mount(<Todos {...props} />);
      wrapper.find('Input[name="text"]').simulate('keyDown', { key: 'Enter' });
      jest.runAllTimers();

      expect(props.onAddingTodo).toHaveBeenCalled();
      expect(props.onAddTodo).toHaveBeenCalled();
      expect(props.onClearTodo).toHaveBeenCalled();
      expect(props.onAddingTodo).toHaveBeenCalledTimes(2);
    });

    test('should call `handleKeyDown` with `key = Return`', () => {
      const newProps = props;
      wrapper = mount(<Todos {...newProps} />);
      wrapper.find('Input[name="text"]').simulate('keyDown', { key: 'Return' });

      expect(wrapper.props().adding).toBeTruthy();
    });
  });
});
