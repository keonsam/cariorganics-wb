import {shallow} from "enzyme";
import React from "react";
import {Product} from "./product";
import {IProduct} from "../Products/i.product";
import { v4 as uuid } from "uuid";
import faker from 'faker';
describe('Product test', ()=> {

    const product: IProduct = {
        productId: uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price()
    };
    test('Product to be defined', () => {
        const wrapper = shallow(<Product product={product}/>);
        expect(wrapper).toHaveLength(1);
    });
});
