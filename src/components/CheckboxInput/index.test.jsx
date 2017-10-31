import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Checkbox } from 'semantic-ui-react';
import renderer from 'react-test-renderer';
import CheckboxInput from './index';

describe('Checkbox Input', () => {
  let input;
  let onChange;
  beforeEach(() => {
    onChange = jest.fn();
    input = shallow(
      <CheckboxInput
        label="some label"
        name="some name"
        value="some value"
        checked
        onChange={onChange}
      />);
  });

  const checkBox = renderer.create(<Checkbox
    label="some label"
    name="some name"
    value="some value"
    checked={false}
    onChange={onChange}
  />).toJSON();

  it('renders Checkbox Input with Checkbox', () => {
    expect(input.find(Checkbox).length).toBe(1);
  });

  it('randers Checkbox correctly', () => {
    expect(checkBox).toMatchSnapshot();
  });
});
