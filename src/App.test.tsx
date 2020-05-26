import React from 'react';
import App from './App';
import {mount, shallow} from "enzyme";
import {BrowserRouter as Router, MemoryRouter} from "react-router-dom";
import {Dashboard} from "./Dashboard/dashboard";

describe('My App Router', () => {
  test('Router to be defined', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  test('Router should go to dashboard', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App/>
        </MemoryRouter>);
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
});

