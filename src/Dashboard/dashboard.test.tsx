import React from 'react';
import {mount, shallow} from "enzyme";
import {Dashboard} from "./dashboard";
import {MemoryRouter} from "react-router-dom";
import {ProductsList} from "../ProductsList/products.list";
import {DASHBOARD, INFO, PRODUCTS_LIST, REQUEST} from "../routes";
import {Request} from "../Request/request";
import {Info} from "../Info/info";

describe('My App Router', () => {
    test('Dashboard to be defined', () => {
        const wrapper = shallow(<Dashboard/>);
        expect(wrapper).toHaveLength(1);
    });

    test('Route should go to products list when route to dashboard', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[DASHBOARD]}>
                <Dashboard />
            </MemoryRouter>);
        expect(wrapper.find(ProductsList)).toHaveLength(1);
    });

    test('Route should go to products list when route to product list', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[PRODUCTS_LIST]}>
                <Dashboard />
            </MemoryRouter>);
        expect(wrapper.find(ProductsList)).toHaveLength(1);
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

