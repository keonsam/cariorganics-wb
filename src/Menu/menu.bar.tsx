import React from "react";
import './menu.bar.css';
import { NavLink } from "react-router-dom";
import {INFO, PRODUCTS, REQUEST} from "../routes";

export const MenuBar: React.FC = () => {
    const routes = [
        {name: 'Products', path: PRODUCTS},
        {name: 'Request', path: REQUEST},
        {name: 'Info', path: INFO},
    ];

    return (
        <nav
            className="mt-2 container flex space-x-4 "
        >
            { routes.map( x => {
                return <NavLink
                        to={x.path}
                        className="text-lg font-medium text-gray-500"
                        activeClassName="border-b-2 border-green-400 text-green-400"
                    >{x.name}</NavLink>
            })}
        </nav>
    );
};
