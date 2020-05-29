import {shallow} from "enzyme";
import React from "react";
import {TopMenu} from "./top.menu";

describe('Top Menu', () => {
   test('top Menu should exist', () => {
       const wrapper = shallow(<TopMenu />);
       expect(wrapper).toHaveLength(1);
   });
});
