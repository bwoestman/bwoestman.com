import * as React from "react";

function NavModal(props)
{
    let passwordVerification = null;
    if (props.verify)
    {
        passwordVerification = (
            <div className="form-group">
                <label htmlFor={props.id + "passwordVerification"}>Password Verification</label>
                <input
                    type="password"
                    className="form-control"
                    id={props.id + "passwordVerification"}
                    placeholder="Password Verification"
                />
            </div>
        )
    }

    return (
        <div
            className="modal fade"
            id={props.id}
            tabIndex="-1"
            role="dialog"
            aria-labelledby={props.id + "Label"}
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.id + "Label"}>
                            {props.title}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form className="form-group">
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor={props.id + "email"}>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id={props.id + "email"}
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <small id={props.id + "emailHelp"}
                                       className="form-text text-muted">
                                    Your email will never be shared with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor={props.id + "password"}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id={props.id + "password"}
                                    placeholder="Password"
                                />
                            </div>
                            {passwordVerification}
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
                                {props.title}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NavModal;
