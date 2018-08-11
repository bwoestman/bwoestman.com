import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Navbar from "./navbar/Navbar";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
