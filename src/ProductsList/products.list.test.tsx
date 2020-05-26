import {shallow} from "enzyme";
import React from "react";
import { ProductsList } from "./products.list";

describe('Products List', ()=> {
    test('Products List to be defined', () => {
        const wrapper = shallow(<ProductsList />);
        expect(wrapper.find('.list')).toHaveLength(1);
        expect(wrapper.find('li').text()).toBe('Product 1');
    });
});
