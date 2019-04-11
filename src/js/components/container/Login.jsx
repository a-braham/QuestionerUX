import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Input } from "../presentational/Input.jsx";
import "../../../css/index.css"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const url = "http://127.0.0.1:8000/api/auth/login/"

    // console.log("User Email : ", email.value)
    // console.log("User Password : ", password.value)
    const data = { email: this.state.email, password: this.state.password }
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
          localStorage.setItem('token', response.token)
          let id_token = localStorage.getItem('token')
          console.log(id_token)
        } else {
          window.alert(response.detail)
        }
      })
  }



  render() {
    const { email } = this.state;
    const { password } = this.state;
    return (
          <form className="was-validated" id="article-form" onSubmit={this.handleSubmit}>
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
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
    );
  }
}

export default Login
// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<Login />, wrapper) : false;
