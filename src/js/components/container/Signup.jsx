import React, { Component } from "react";
import { toast } from "react-toastify";
import { Input } from "../presentational/Input.jsx";
import "../../../css/index.css";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      nick_name: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "https://questioner-v3.herokuapp.com/api/auth/signup/"
    const data = {
      name: this.state.name,
      nick_name: this.state.nick_name,
      email: this.state.email,
      password: this.state.password
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        if ('token', response.token) {
          window.location.href = "/";
          toast.success("Successfully Signup, Pls activate your account", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: true,
          });
        } else {
          toast.error(response.detail, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: true,
          });
        }
      })
  }

  render() {
    const { name } = this.state;
    const { nick_name } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    return (
          <form className="was-validated" id="article-form" onSubmit={this.handleSubmit}>
            <Input
              text="Name"
              label="name"
              type="text"
              id="name"
              value={name}
              handleChange={this.handleChange}
            />
            <Input
              text="Nick name"
              label="nick_name"
              type="text"
              id="nick_name"
              value={nick_name}
              handleChange={this.handleChange}
            />
            <Input
              text="Email"
              label="email"
              type="email"
              id="email"
              value={email}
              handleChange={this.handleChange}
            />
            <Input
              text="Password"
              label="password"
              type="password"
              id="password"
              value={password}
              handleChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
    );
  }
}

export default Signup
