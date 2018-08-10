import * as React from "react";
import NavButton from "./NavButton";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          {this.props.title}
        </a>
        <div className="row justify-content-end">
          <NavButton dataTarget="loginModal" title="Login" modal="true">
            <FaSignInAlt className="align-middle" />
          </NavButton>

          <NavButton
            dataTarget="signUpModal"
            title="Sign Up"
            modal="true"
            verify="true"
          >
            <FaUserPlus className="align-middle" />
          </NavButton>
        </div>
      </nav>
    );
  }
}

export default Navbar;
