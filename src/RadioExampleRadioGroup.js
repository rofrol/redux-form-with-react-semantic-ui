import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RadioComponent from './components/RadioComponent';
import CheckboxInput from './components/CheckboxInput';

class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        this.state.hasParentCompany: {JSON.stringify(this.state.hasParentCompany)}
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
        <Field
          component={CheckboxInput}
          label="This company has subsidiaries"
          name="hasSubsidiaries"
        />
        <CheckboxInput
            label="This company has a parent company"
            name="hasParentCompany"
            onChange={(e, { checked }) => this.setState({ hasParentCompany: checked })}
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
