import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Navbar from "../navbar/Navbar";

let renderer;
let result;
const title = "bdub";

beforeEach(() => {
  renderer = new ShallowRenderer();
  renderer.render(<Navbar title={title} />);
  result = renderer.getRenderOutput();
});

it("is a nav element", () => {
  expect(result.type).toBe("nav");
});

it("has the correct title", () => {});

it("contains three children", () => {
  expect(result.props.children).toHaveLength(2);
});

it("contain Logo with title, Login button & Sign Up button", () => {
  expect(result.props.children[0].type).toBe("a");
  expect(result.props.children[0].props.children).toEqual(title);
  expect(result.props.children[1].props.children[0].props.title).toEqual("Login");
  expect(result.props.children[1].props.children[1].props.title).toEqual("Sign Up");
});
