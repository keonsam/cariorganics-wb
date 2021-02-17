import {shallow} from "enzyme";
import React from "react";
import {Request} from "./request";

describe('Request', () => {
    test('Request should exist', () => {
        const wrapper = shallow(<Request />);
        expect(wrapper).toHaveLength(1);
    });
});
