import * as React from "react";
import NavModal from "./NavModal";

function NavButton(props) {
  let navModal;
  if (props.modal === "true") {
    navModal = (
      <NavModal
        id={props.dataTarget}
        title={props.title}
        passwordVerification={props.passwordVerification}
      />
    );
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={"#" + props.dataTarget}
      >
        {props.children}
        <span className="align-middle">{props.title}</span>
      </button>
      {navModal}
    </div>
  );
}
export default NavButton;
