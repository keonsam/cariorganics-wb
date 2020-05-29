import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './top.menu.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const TopMenu: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-logo">CariOrganics</h1>
            <FontAwesomeIcon icon={faShoppingCart} className="header-icon"/>
        </header>
    )
};
