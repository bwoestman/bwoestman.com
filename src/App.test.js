import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import AnotherComponent from "./AnotherComponenet";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
});
