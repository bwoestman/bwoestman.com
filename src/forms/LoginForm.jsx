import * as React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form id="loginForm" className="form-group">
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="loginFormEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="loginFormEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="loginFormEmailHelp" className="form-text text-muted">
              Your email will never be shared with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="loginFormPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginFormPassword"
              placeholder="Password"
            />
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
            Login
          </button>
        </div>
      </form>
    );
  }
}
export { LoginForm };
