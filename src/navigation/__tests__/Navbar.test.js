import * as React from "react";
import { Navbar } from "../Navbar";
import { NavButton } from "../NavButton";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Navbar />);
});

describe("Navbar", () => {
  it("has a logo", () => {
    expect(wrapper.find(".navbar-brand")).toHaveLength(1);
  });

  it("has two buttons", () => {
    expect(wrapper.find('.btn')).toHaveLength(2);
  });
});
