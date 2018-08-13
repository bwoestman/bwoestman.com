import * as React from 'react';
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          {this.props.title}
        </a>
        <div className="row justify-content-end">
          <a className="btn btn-primary" href="/login" role="button">
            <FaSignInAlt className="align-middle mr-1" />
            <span className="align-middle">Login</span>
          </a>

          <a className="btn btn-primary" href="/signUp" role="button">
            <FaUserPlus className="align-middle mr-1" />
            <span className="align-middle">Sign Up</span>
          </a>
        </div>
      </nav>
    );
  }
}

export { Navbar };
