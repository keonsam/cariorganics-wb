import {shallow} from "enzyme";
import React from "react";
import {Authentication} from "./authentication";

describe('Authentication', () => {
    test('Authentication should be defined', () => {
        const wrapper = shallow(<Authentication/>);
        expect(wrapper).toHaveLength(1);
    });
});
