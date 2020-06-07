import React from "react";
import {Container, Loader} from "semantic-ui-react";

export const ProductsLoading: React.FC = () => {
    return (
        <Container>
            <Loader size='huge' active>Loading Products</Loader>
        </Container>
    );
};
