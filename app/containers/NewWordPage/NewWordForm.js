import React, { Component } from 'react';
import Arrow from './Arrow';
import Form from './Form';
import Button from './Button';
import Input from './Input';

export default class NewWordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`sending ${this.state.string}`);
    this.setState({
      string: '',
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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
      </Form>
    );
  }
}