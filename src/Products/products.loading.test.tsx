import React from 'react';
import { shallow} from "enzyme";
import {ProductsLoading} from "./products.loading";

describe('Products Loading', () => {
    test('Products Loading to be defined', () => {
        const wrapper = shallow(<ProductsLoading/>);
        expect(wrapper).toHaveLength(1);
        // expect(wrapper.find(Loader)).toHaveLength(1);
    });
});
