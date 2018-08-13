import * as React from "react";

function NavButton(props) {
  return (
    <div>
      <button
        id={props.id}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={"#" + props.dataTarget}
      >
        {props.children}
        <span className="align-middle">{props.title}</span>
      </button>
    </div>
  );
}
export { NavButton };
