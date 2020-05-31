import React from "react";
import './menu.bar.css';
import { NavLink } from "react-router-dom";
import {INFO, PRODUCTS_LIST, REQUEST} from "../routes";
import {Button, Container, Icon, Menu} from "semantic-ui-react";

export const MenuBar: React.FC = () => {
    return (
        <Menu
            pointing
            secondary
            size='large'
            className="menu"
        >
            <Container>
                <Menu.Item
                    name='Products'
                    color="green"
                    as={NavLink}
                    to={PRODUCTS_LIST}
                />
                <Menu.Item
                    name='Request'
                    color="green"
                    as={NavLink}
                    to={REQUEST}
                />
                <Menu.Item
                    name='Info'
                    color="green"
                    as={NavLink}
                    to={INFO}
                />
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button icon color="green">
                            <Icon name="cart" /> Cart
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
};
