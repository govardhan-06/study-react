import React, { Component } from "react";

class ContactForm extends Component {
  state = { email: "" };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${this.state.email}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" value={this.state.email} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
