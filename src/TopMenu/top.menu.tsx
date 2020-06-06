import React from "react";
import './top.menu.css';
import { Container, Header, Image } from 'semantic-ui-react';
import logo from '../images/logo2.png';
export const TopMenu: React.FC = () => {
    const src1 = '/src/images/logo2.png';
    return (
        <Container className="header">
            <Header as="h1" color="green" size="huge" textAlign="center">
                <Image src={logo} size='huge' verticalAlign="middle" centered className="logo" />
                CariOrganics</Header>
        </Container>
    );
};
