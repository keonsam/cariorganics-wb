import React from "react";
import './top.menu.css';
import logo from '../images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const TopMenu: React.FC = () => {
    return (
        <div className="container flex items-center">
            <img src={logo} className="w-20 h-10 mr-3"/>
            <h1 className="text-green-400 text-3xl">CariOrganics</h1>
            <div className="ml-auto rounded-full flex items-center justify-center p-3 bg-gray-200">
                <FontAwesomeIcon icon={faShoppingCart} className="text-green-400 text-xl"/>
            </div>
        </div>
    );
};
