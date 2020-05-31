import {shallow} from "enzyme";
import React from "react";
import {TopMenu} from "./top.menu";

describe('Top MenuBar', () => {
   test('top MenuBar should exist', () => {
       const wrapper = shallow(<TopMenu />);
       expect(wrapper).toHaveLength(1);
   });
});
