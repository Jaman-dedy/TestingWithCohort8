import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../components/common/Input/Input';

const props = {
  onChange: jest.fn(),
};
describe('Input.jsx', () => {
  test('should render', () => {
    const wrapper = shallow(<Input {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
