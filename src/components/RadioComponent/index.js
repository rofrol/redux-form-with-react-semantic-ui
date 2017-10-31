import React from 'react';
import { Radio } from 'semantic-ui-react';

const RadioComponent = (props) => {
    const { input, label, radioValue, checked, onClick, value } = props;
    let radioProps;
    if (input) {
        radioProps = {
            label,
            ...input,
            onChange: () => input.onChange(radioValue),
            checked: input.value === radioValue,
        };
    } else {
        radioProps = {
            label,
            checked,
            onClick,
            value,
        };
    }
    
    return (
        <Radio
        {...radioProps}
        />
    );
};

export default RadioComponent;
