import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
// import toJSON from "enzyme-to-json";
import Header from "../../components/Header";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  console.log(wrapper);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find("h1").text()).toBe('Expensify');
  // const renderer.render(<Header />);
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
