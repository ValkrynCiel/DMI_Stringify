import React, { Component } from 'react';
import getId from 'utils/id';
import Arrow from './Arrow';
import Form from './Form';
import Button from './Button';
import Input from './Input';
import FormNotice from './FormNotice';

export default class NewStringForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
      tooShort: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    // string validation
    if (!this.state.string) {
      this.setState({
        tooShort: true,
      });
    } else {
      await this.props.handleAddString(getId(), this.state.string);

      this.setState({
        string: '',
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      tooShort: false,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          id="string"
          name="string"
          value={this.state.string}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <Button type="submit">
          <Arrow />
        </Button>
        <FormNotice show={this.state.tooShort}>
          Looks like you didn&#39;t type anything before sending.
          <br />
          Try typing a letter, a word, or a whole paragraph!
        </FormNotice>
      </Form>
    );
  }
}
