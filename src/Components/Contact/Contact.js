import React, { Component } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends Component {
  state= {
    name: "",
    email: "",
    number: "",
    message: ""
  }

  handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Successfully sent.");
        this.setState({
          name: "",
          email: "",
          number: "",
          message: ""
        })
      })
      .catch(error => alert(error));

    event.preventDefault();
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  render () {
    const { name, email, number, message } = this.state;

    return (
      <form name="contact" onSubmit={this.handleSubmit}>
        <fieldset>
          <input name="name" value={name} placeholder="Name" type="text" onChange={this.handleChange} tabIndex="1" required></input>
        </fieldset>
        <fieldset>
          <input name="email" value={email} placeholder="Email" type="email" onChange={this.handleChange} tabIndex="2" required></input>
        </fieldset>
        <fieldset>
          <input name="number" value={number} placeholder="Number (optional)" type="tel" onChange={this.handleChange} tabIndex="3"></input>
        </fieldset>
        <fieldset>
          <textarea name="message" value={message} placeholder="Message" onChange={this.handleChange} tabIndex="4" required></textarea>
        </fieldset>
        <button name="submit" type="submit">Submit</button>
      </form>
    )
  }
}

export default Contact;
