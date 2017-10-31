import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const CheckboxInput = (props) => {
  const { disabled, label, name, defaultChecked, onChange, input } = props;
  console.log(props);
  let checkboxProps;
  if (input) {
    checkboxProps = {
      onChange: (event, { checked }) => input.onChange(checked),
      checked: !!input.value,
    };
  } else {
    checkboxProps = {
      onChange,
      defaultChecked,
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
