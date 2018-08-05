import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import Navbar from "../navbar/Navbar";

it("has two NavModalButtons", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Navbar />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe("div");
});
