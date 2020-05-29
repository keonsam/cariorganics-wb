import {shallow} from "enzyme";
import React from "react";
import {Product} from "./product";

describe('Product test', ()=> {
    test('Product to be defined', () => {
        const wrapper = shallow(<Product />);
        expect(wrapper).toHaveLength(1);
    });
});
