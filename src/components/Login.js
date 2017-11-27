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
    this.props.login({ ...this.state });
  };

  renderError = () => {
    return (
      this.props.error && (
        <div className="alert alert-danger">
          <strong>Error!</strong> invalid credentials.
        </div>
      )
    );
  };

  renderSuccess = () => {
    return (
      this.props.success && (
        <div className="alert alert-success">
          <strong>Success!</strong> you're being redirected.
        </div>
      )
    );
  };

  renderInput = (type, caption, onChange) => (
    <div className="form-group">
      <label>
        {caption}
        <input
          type={type}
          className="form-control"
          placeholder={caption}
          onChange={onChange}
        />
      </label>
    </div>
  );

  render() {
    return (
      <div className="form col-md-6 offset-md-3 col-sm-12 push-sm-12">
        <form>
          {this.renderInput("email", "Email address", this.onEmail)}
          {this.renderInput("password", "Password", this.onPassword)}
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
          {this.renderError()}
          {this.renderSuccess()}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;
