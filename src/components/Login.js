import React, { Component } from "react";
import PropTypes from "prop-types";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      rememberMe: false
    };
  }

  update = name => {
    return e => {
      const t = e.target;
      this.setState({
        [name]: t.type === "checkbox" ? t.checked : t.value
      });
    };
  };
  onEmail = this.update("email");
  onPassword = this.update("password");
  onRememberMe = this.update("rememberMe");
  onSubmit = e => {
    console.log("Do Login", this.state);
  };

  mayRenderError = () => {
    if (!this.props.error) {
      return false;
    }
    return (
      <div className="alert alert-danger">
        <strong>Error!</strong> invalid credentials.
      </div>
    );
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
            type="button"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Login
          </button>
          {this.mayRenderError()}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  error: PropTypes.bool.isRequired
};

export default Login;
