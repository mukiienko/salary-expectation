import React from 'react';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../index';

enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  handleChange: () => {},
  list: []
};
const SelectTest = props => <Select {...defaultProps} {...props} />;

describe('render Select', () => {
  it('render correctly select component', () => {
    const component = renderer.create(<SelectTest />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('props behaviour', () => {
    const props = {
      value: 0,
      label: 'label text',
      helper: 'helper text',
      disabled: true,
      list: [{ id: 0, name: 'TestNameOne' }, { id: 2, name: 'TestNameTwo' }]
    };
    const SelectTestWithProps = enzyme.mount(<SelectTest {...props} />);

    it('render correctly label props', () => {
      expect(
        SelectTestWithProps.find('label').contains(props.label)
      ).toBeTruthy();
    });

    it('render correctly helper props', () => {
      expect(SelectTestWithProps.find('p').contains(props.helper)).toBeTruthy();
    });

    it('render correctly disabled props', () => {
      expect(SelectTestWithProps.find('select').prop('disabled')).toBe(
        props.disabled
      );
    });

    it('render correctly list props', () => {
      expect(
        SelectTestWithProps.find('option')
          .at(0)
          .text()
      ).toBe(props.list[0].name);
      expect(
        SelectTestWithProps.find('option')
          .at(0)
          .props('value').value
      ).toBe(props.list[0].id);
      expect(SelectTestWithProps.find('option').length).toBe(props.list.length);
    });

    it('render correctly value props', () => {
      expect(SelectTestWithProps.find('select').prop('value')).toBe(
        props.value
      );
    });
  });

  describe('change behaviour', () => {
    const onChange = jest.fn(value => value);
    const handleChange = e => onChange(e);
    const props = {
      handleChange,
      valueName: 'testName',
      list: [{ id: 0, name: 'TestNameOne' }]
    };
    const SelectTestWithProps = enzyme.mount(<SelectTest {...props} />);

    it('fire change event', () => {
      const event = {
        preventDefault() {},
        target: { value: props.list[0].id }
      };
      SelectTestWithProps.find('select').simulate('change', event);
      expect(onChange).toHaveReturnedWith(props.list[0].id);
    });
  });
});
