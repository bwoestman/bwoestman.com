import React from "react";
import TestRenderer from "react-test-renderer";
import NavModal from "../navbar/NavModal";

let navModal;
const testId = "testId";

afterEach(() => {
  navModal.unmount();
});

describe('NavModal function', () => {
  it("is a div element", () => {
    navModal = TestRenderer.create(<NavModal />);
    expect(navModal.toJSON().type).toBe("div");
  });
  
  it("populates props.id correctly", () => {
    navModal = TestRenderer.create(<NavModal id={testId} />);
    expect(navModal.toJSON().props.id).toBe(testId);
    console.log(navModal.toJSON());
  });
});
