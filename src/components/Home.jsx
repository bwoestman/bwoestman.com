import * as React from "react";
import { AuthConsumer } from "react-check-auth";

const Home = () => {
  return (
    <div>
      <AuthConsumer>
        {({ userInfo, isLoading, error }) => {
          if (!userInfo) {
            <h1>no userInfo</h1>;
          } else {
            <h1>userInfo</h1>;
          }
        }}
      </AuthConsumer>
    </div>
  );
};
export { Home };
