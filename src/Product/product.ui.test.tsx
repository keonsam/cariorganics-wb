import {mount} from "enzyme";
import React from "react";
import {IProduct} from "../Products/i.product";
import { v4 as uuid } from "uuid";
import faker from 'faker';
import {ProductUI} from "./product.ui";
describe('Product UI test', ()=> {

    const product: IProduct = {
        productId: uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price()
    };
    test('Product UI to be defined', () => {
        const wrapper = mount(<ProductUI product={product}/>);
        expect(wrapper).toHaveLength(1);
        // expect(wrapper.find(Card.Header).text()).toBe(product.title);
    });
});
