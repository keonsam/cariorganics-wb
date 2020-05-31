import {shallow} from "enzyme";
import React from "react";
import {MenuBar} from "./menu.bar";

describe('Menu', () => {
    test('MenuBar should exist', () => {
        const wrapper = shallow(<MenuBar />);
        expect(wrapper).toHaveLength(1);
    });
});
