import React from "react";
import './top.menu.css';
import {Container, Header} from 'semantic-ui-react'
export const TopMenu: React.FC = () => {
    return (
        <Container className="header">
            <Header as="h1" color="green" size="huge" textAlign="center">CariOrganics</Header>
        </Container>
    );
};
