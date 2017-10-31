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
      <Form.Field>
      Selected value: <b>{this.state.value}</b>
      </Form.Field>
      <Form.Field>
      <Field
      component={Radio}
      label='Choose this'
      name='radioGroup'
      value='this'
      checked={this.state.value === 'this'}
      onChange={this.handleChange}
      />
      </Form.Field>
      <Form.Field>
      <Field
      component={Radio}
      label='Or that'
      name='radioGroup'
      value='that'
      checked={this.state.value === 'that'}
      onChange={this.handleChange}
      />
      </Form.Field>
      <Field
      component={RadioComponent}
      name="someradio"
      />
      <Field
      name="somename1"
      radioValue={1}
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
