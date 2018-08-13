import * as React from "react";
import { NavButton } from "../NavButton";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NavButton />);
})
describe("Navbar", () => {
  it("has a button", () => {
    expect(wrapper.find(".btn-primary")).toHaveLength(1);
  });
});
