import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Select = ({
  label,
  helper,
  value,
  valueName,
  disabled = false,
  handleChange,
  list = []
}) => (
  <FormControl>
    <InputLabel htmlFor={valueName}>{label}</InputLabel>
    <NativeSelect
      value={value}
      onChange={useCallback(e => handleChange(e.target.value))}
      disabled={disabled}
      input={<Input name={valueName} id={valueName} />}
    >
      {list.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </NativeSelect>
    <FormHelperText>{helper}</FormHelperText>
  </FormControl>
);

Select.propTypes = {
  label: PropTypes.string,
  helper: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueName: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  list: PropTypes.array
};

export default Select;
