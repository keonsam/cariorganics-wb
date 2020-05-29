import React from "react";
import './menu.css';
import { NavLink } from "react-router-dom";
import {INFO, PRODUCTS_LIST, REQUEST} from "../routes";

export const Menu: React.FC = () => {
    return (
        <nav className="menu">
            <NavLink to={PRODUCTS_LIST} activeClassName="selected" className="nav-link">Products</NavLink>
            <NavLink to={REQUEST} activeClassName="selected" className="nav-link">Request</NavLink>
            <NavLink to={INFO} activeClassName="selected" className="nav-link">Info</NavLink>
        </nav>
    )
};
