import {shallow} from "enzyme";
import React from "react";
import {ProductsError} from "./products.error";

describe('Products Error', () => {
    test('product error should exist', () => {
        const wrapper = shallow(<ProductsError />);
        expect(wrapper).toHaveLength(1);
    });
});
