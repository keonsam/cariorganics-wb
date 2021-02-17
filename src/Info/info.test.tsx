import {shallow} from "enzyme";
import React from "react";
import {Info} from "./info";

describe('Info', () => {
    test('Info should exist', () => {
        const wrapper = shallow(<Info />);
        expect(wrapper).toHaveLength(1);
    });
});
