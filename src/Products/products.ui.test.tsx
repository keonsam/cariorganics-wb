import {shallow} from "enzyme";
import React from "react";
import {ProductsUI} from "./products.ui";
import {IProduct} from "./i.product";
import faker from "faker";
import { v4 as uuid} from "uuid";

describe('Products UI', ()=> {
    const products: IProduct[] = [
        {
            productId: uuid(),
            title: faker.commerce.productName(),
            price: faker.commerce.price()
        }
    ];
    test('Products List UI to be defined', () => {
        const wrapper = shallow(<ProductsUI products={products}/>);
        expect(wrapper).toHaveLength(1);
    });
});
