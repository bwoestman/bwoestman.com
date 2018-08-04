import Login from "./Login";
import * as React from "react";

class HeaderContainer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          {this.props.title}
        </a>
        <Login />
      </nav>
    );
  }
}

export default HeaderContainer;
