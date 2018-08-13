import * as React from "react";
import { AuthConsumer } from "react-check-auth";
import { Redirect } from "react-router-dom";

const Protected = () => {
  return (
    <div>
      <AuthConsumer>
        {({ userInfo }) => {
          if (userInfo) {
            let user = userInfo.success;
            return <h1>Welcome {user.name}</h1>;
          }
        }}
      </AuthConsumer>
    </div>
  );
};
export { Protected };
