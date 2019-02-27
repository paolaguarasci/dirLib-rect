import React from "react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";
import InLineError from "../messages/InLineError";
import { Form, Button } from "semantic-ui-react";

class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loagind: false,
    errors: {}
  };
  // universal function to add fields change on data object
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  onSubmit = e => {
    e.preventDefault();
    // validate data
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    // check if errors object is empty
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };
  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InLineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InLineError text={errors.password} />}
        </Form.Field>
        <Button primary>Sign up</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.irRequired
};

export default SignupForm;
