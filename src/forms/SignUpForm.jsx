import * as React from "react";
import { UserService } from "../services/UserService";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpFormName: "",
      signUpFormEmail: "",
      signUpFormPassword: "",
      signUpFormPasswordConfirmation: "",
      passwordValidationClass: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validatePasswords();
    let us = new UserService();
    us.createNewUser(
      this.state.signUpFormName,
      this.state.signUpFormEmail,
      this.state.signUpFormPassword,
      this.state.signUpFormPasswordConfirmation
    );
  };

  validatePasswords = () => {
    if (
      this.state.signUpFormPassword ===
      this.state.signUpFormPasswordConfirmation
    ) {
      this.setState({
        passwordValidationClass: "is-valid"
      });
    } else {
      this.setState({
        passwordValidationClass: "is-invalid"
      });
    }
  };

  render() {
    return (
      <form id="signUpForm" className="form-group" onSubmit={this.handleSubmit}>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="signUpFormName">Name</label>
            <input
              type="name"
              className="form-control"
              id="signUpFormName"
              aria-describedby="nameHelp"
              placeholder="Enter name"
              value={this.state.signUpFormName}
              onChange={this.handleChange}
              required
            />
            <small id="signUpFormEmailHelp" className="form-text text-muted">
              Your email will never be shared with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="signUpFormEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="signUpFormEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.signUpFormEmail}
              onChange={this.handleChange}
              required
            />
            <small id="signUpFormEmailHelp" className="form-text text-muted">
              Your email will never be shared with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="signUpFormPassword">Password</label>
            <input
              type="password"
              className={"form-control " + this.state.passwordValidationClass}
              id="signUpFormPassword"
              placeholder="Password"
              value={this.state.signUpFormPassword}
              onChange={this.handleChange}
              required
            />
            <div className="invalid-feedback">Your passwords must match</div>
            <div className="valid-feedback">Your passwords match</div>
          </div>
          <div className="form-group">
            <label htmlFor="signUpFormPasswordConfirmation">
              Password Confirmation
            </label>
            <input
              type="password"
              className={"form-control " + this.state.passwordValidationClass}
              id="signUpFormPasswordConfirmation"
              placeholder="Password Confirmation"
              value={this.state.signUpFormPasswordConfirmation}
              onChange={this.handleChange}
              required
            />
            <div className="invalid-feedback">Your passwords must match</div>
            <div className="valid-feedback">Your passwords match</div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}
export { SignUpForm };
