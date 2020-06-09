import React from 'react';
import { shallow} from "enzyme";
import {ProductsLoading} from "./products.loading";
import { Loader } from "semantic-ui-react";

describe('Products Loading', () => {
    test('Products Loading to be defined', () => {
        const wrapper = shallow(<ProductsLoading/>);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(Loader)).toHaveLength(1);
    });
});
