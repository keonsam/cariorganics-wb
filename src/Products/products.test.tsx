import {mount, shallow} from "enzyme";
import React from "react";
import {GET_PRODUCTS, Products} from "./products";
import {MockedProvider, wait} from '@apollo/react-testing';
import {ProductsUI} from "./products.ui";
import {ProductsLoading} from "./products.loading";
import {act} from "react-dom/test-utils";
import {ProductsError} from "./products.error";
describe('Products List', ()=> {

    test('Products List to be defined', () => {
        const wrapper = shallow(
            <MockedProvider>
                <Products />
            </MockedProvider>
        );
        expect(wrapper).toHaveLength(1);
    });

    test('Products should be loading', async () => {
        const wrapper = mount(
            <MockedProvider mocks={[]} addTypename={false}>
                <Products />
            </MockedProvider>
        );
        await act(async () => {
            await wait(0);
        });
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(ProductsLoading)).toHaveLength(1);
    });

    test('should return products error', async () => {
        const mocks = [
            {
                request: {
                    query: GET_PRODUCTS
                },
                error: new Error('error')
            },
        ];


        const wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Products />
            </MockedProvider>
        );
        await act(async () => {
            await wait(0);
        });
        wrapper.update();
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(ProductsError)).toHaveLength(1);
    });

    test('List  of products', async () => {
        const mocks = [
            {
                request: {
                    query: GET_PRODUCTS
                },
                result: {
                    data: {
                        getProducts: [
                            { productId: '1', title: 'Eve Corn Beef', price: '8' }
                        ],
                    },
                },
            },
        ];


        const wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Products />
            </MockedProvider>
            );
        await act(async () => {
            await wait(0);
        });
        wrapper.update();
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(ProductsUI)).toHaveLength(1);
    });
});
