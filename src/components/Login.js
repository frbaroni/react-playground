import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.setState({
      email: null,
      password: null,
      rememberMe: null
    });
  }

  onEmail = email => this.setState({ email });
  onPassword = password => this.setState({ password });
  onRememberMe = rememberMe => this.setState({ rememberMe });
  onSubmit = () => {
    console.log("Do Login", this.state);
  };

  render() {
    return (
      <div className="form col-md-6 offset-md-3 col-sm-12 push-sm-12">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.onEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.onPassword}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={this.onRememberMe}
              />
              Remember me?
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={this.onSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
