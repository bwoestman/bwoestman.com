import * as React from "react";
import NavModalButton from "./NavModalButton";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          {this.props.title}
        </a>
        <div className="row justify-content-end">
          <NavModalButton dataTarget="loginModal" title="Login">
            <FaSignInAlt className="align-middle" />
          </NavModalButton>

          <NavModalButton
            dataTarget="signUpModal"
            title="Sign Up"
            verify="true"
          >
            <FaUserPlus className="align-middle" />
          </NavModalButton>
        </div>
      </nav>
    );
  }
}

export default Navbar;
