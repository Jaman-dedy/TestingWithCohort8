import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleTodo from '../../components/Todo/SingleTodo';

let wrapper;
const props = {
  index: 1,
  content: {
    id: '6d470672-d137-4333-9ed8-c4939f96b2a5',
    text: 'Testing hints',
    done: false,
    deleting: false,
  },
  onDelete: jest.fn(),
  onCheck: jest.fn(),
};
describe('SingleTodo.jsx', () => {
  test('should render', () => {
    wrapper = shallow(<SingleTodo {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render `active` on `check button` ', () => {
    const newProps = props;
    newProps.content.done = true;
    wrapper = mount(<SingleTodo {...newProps} />);

    expect(wrapper.props().content.done).toBeTruthy();
  });

  test('should render `is-loading` on `delete button`', () => {
    const newProps = props;
    newProps.content.deleting = true;
    wrapper = mount(<SingleTodo {...newProps} />);

    expect(wrapper.props().content.deleting).toBeTruthy();
  });

  describe('when clicking on `check button`', () => {
    test('should call `onCheck` function', () => {
      wrapper.find('#btn-check').simulate('click');

      expect(props.onCheck).toHaveBeenCalled();
    });
  });

  describe('when clicking on `delete button`', () => {
    test('should call `onDelete` function', () => {
      wrapper.find('#btn-delete').simulate('click');

      expect(props.onDelete).toHaveBeenCalled();
    });
  });
});
