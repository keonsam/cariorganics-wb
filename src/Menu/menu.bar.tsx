import React from "react";
import './menu.bar.css';
import { NavLink } from "react-router-dom";
import {INFO, PRODUCTS, REQUEST} from "../routes";

export const MenuBar: React.FC = () => {
    return (
        <nav
            className="bg-white mt-2"
        >
            <div className="container flex space-x-3 font-normal">
                <NavLink
                    to={PRODUCTS}
                    className="navLink"
                    activeClassName="active-navLink"
                >Products</NavLink>
                <NavLink
                    to={REQUEST}
                    className="navLink"
                    activeClassName="active-navLink"
                >Request</NavLink>
                <NavLink
                    to={INFO}
                    className="navLink"
                    activeClassName="active-navLink"
                >Info</NavLink>
            </div>
        </nav>
    );
};
