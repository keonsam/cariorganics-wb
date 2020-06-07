import React from 'react';
import {mount, shallow} from "enzyme";
import {Dashboard} from "./dashboard";
import {MemoryRouter} from "react-router-dom";
import {GET_PRODUCTS, Products} from "../Products/products";
import {DASHBOARD, INFO, PRODUCTS, REQUEST} from "../routes";
import {Request} from "../Request/request";
import {Info} from "../Info/info";
import {MockedProvider} from "@apollo/react-testing";

const mocks = [
    {
        request: {
            query: GET_PRODUCTS
        },
        result: {
            data: {
                getProducts: [ ],
            },
        },
    },
];
describe('My App Router', () => {
    test('Dashboard to be defined', () => {
        const wrapper = shallow(<Dashboard/>);
        expect(wrapper).toHaveLength(1);
    });

    test('Route should go to products when route to dashboard', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[DASHBOARD]}>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Dashboard />
                </MockedProvider>
            </MemoryRouter>);
        expect(wrapper.find(Products)).toHaveLength(1);
    });

    test('Route should go to products when route to product list', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[PRODUCTS]}>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Dashboard />
                </MockedProvider>
            </MemoryRouter>);
        expect(wrapper.find(Products)).toHaveLength(1);
    });

    test('Route should go to request', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[REQUEST]}>
                <Dashboard />
            </MemoryRouter>);
        expect(wrapper.find(Request)).toHaveLength(1);
    });

    test('Route should go to info', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[INFO]}>
                <Dashboard />
            </MemoryRouter>);
        expect(wrapper.find(Info)).toHaveLength(1);
    });
});

