import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="string">New word:</label>
        <input
          id="string"
          name="string"
          value={this.state.string}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}