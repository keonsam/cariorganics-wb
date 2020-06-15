import React from "react";
import './top.menu.css';
import logo from '../images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const TopMenu: React.FC = () => {
    return (
        <div className="container flex items-center">
            <img src={logo} className="w-10 h-5 mr-2"/>
            <h1 className="text-green-600 text-2xl font-normal">CariOrganics</h1>
            <button
                className="focus:outline-none ml-auto rounded-full flex items-center justify-center p-3 hover:bg-gray-100"
            >
                <FontAwesomeIcon icon={faShoppingCart} className="text-green-600 text-xl"/>
            </button>
        </div>
    );
};
