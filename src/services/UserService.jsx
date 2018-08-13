import * as React from "react";
import { Constants } from "../util/Constants";

export class UserService extends React.Component {
  createNewUser = function(name, email, password, cPassword) {
    let formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("cPassword", cPassword);

    fetch(`${Constants.API_ROOT_URL}api/register`, {
      method: "POST",
      body: formData
    }).then(response => {
      console.log(response.json());
    });
  };
}
