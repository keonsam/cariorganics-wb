import React from 'react';
import {mount, shallow} from "enzyme";
import {Dashboard} from "./dashboard";
import {MemoryRouter} from "react-router-dom";
import {ProductsList} from "../ProductsList/products.list";
import {DASHBOARD} from "../routes";

describe('My App Router', () => {
    test('Dashboard to be defined', () => {
        const wrapper = shallow(<Dashboard/>);
        expect(wrapper.find('.dashboard')).toHaveLength(1);
    });

    test('Route should go to products list', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[DASHBOARD]}>
                <Dashboard />
            </MemoryRouter>);
        expect(wrapper.find(ProductsList)).toHaveLength(1);
    });
});

