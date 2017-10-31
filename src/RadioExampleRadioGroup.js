import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RadioComponent from './components/RadioComponent';

class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Field
          name="somename1"
          label="some label"
          radioValue="1"
          component={RadioComponent}
        />
        <Field
          name="somename1"
          label="some label 2"
          radioValue="2"
          component={RadioComponent}
        />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'RadioExampleRadioGroup',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(RadioExampleRadioGroup);
