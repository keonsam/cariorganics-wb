import {shallow} from "enzyme";
import React from "react";
import {ProductsUI} from "./products.ui";
describe('Products UI', ()=> {
    test('Products List UI to be defined', () => {
        const wrapper = shallow(<ProductsUI />);
        expect(wrapper).toHaveLength(1);
    });
});
