import {shallow} from "enzyme";
import React from "react";
import {Loader} from "./loader";

describe('loader', () => {
    test('loader should exist', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper).toHaveLength(1);
    });
});
