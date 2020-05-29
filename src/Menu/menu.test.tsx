import {shallow} from "enzyme";
import React from "react";
import {Menu} from "./menu";

describe('Menu', () => {
    test('Menu should exist', () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper).toHaveLength(1);
    });
});
