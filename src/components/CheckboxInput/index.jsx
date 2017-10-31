import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const CheckboxInput = (props) => {
  const { disabled, label, name, checkboxValue, defaultChecked, checked, onClick, value, input } = props;
  console.log(props);
  let checkboxProps;
  if (input) {
    checkboxProps = {
      label,
      onChange: (event, {checked}) => input.onChange(checked),
      checked: input.value ? true : false,
    };
  } else {
    checkboxProps = {
      label,
      checked,
      onClick,
    };
  }
  return (
    <div className="checkbox-wrapper">
      <Checkbox
        disabled={disabled}
        label={label}
        name={name}
        {...checkboxProps}
      />
    </div>
  );
};

CheckboxInput.defaultProps = {
  defaultChecked: false,
};

export default CheckboxInput;
