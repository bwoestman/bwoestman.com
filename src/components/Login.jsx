import * as React from "react";

const Login = () => {
  return (
    <div>
      <AuthConsumer>
        {userInfo => {
          console.log(userInfo);
        }}
      </AuthConsumer>
    </div>
  );
};
export { Login };
