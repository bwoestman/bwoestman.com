import React from "react";
import TestRenderer from "react-test-renderer";
import NavButton from "../navbar/NavButton";

let navButton;

afterEach(() => {
    navButton.unmount();
});

it("is a div element", () => {
  navButton = TestRenderer.create(<NavButton />);
  expect(navButton.toJSON().type).toBe("div");
});

it("contains one child, a button", () => {
  navButton = TestRenderer.create(<NavButton />);
  expect(navButton.toJSON().children).toHaveLength(1);
  expect(navButton.toJSON().children[0].type).toBe("button");
});

it("creates a model when instructed", () => {
  navButton = TestRenderer.create(
    <NavButton dataTarget="dataTarget" modal="true" />
  );
  expect(navButton.toJSON().children[1].props.id).toBe("dataTarget");
});
