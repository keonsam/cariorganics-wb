import React from 'react';
import {Container} from "semantic-ui-react";
import {gql} from "apollo-boost";
import { GraphQLUpload }
const GET_PRODUCTS = gql`{
    getProducts {
        title: string
        price: string
    }
}`;
export const ProductsList: React.FC = () => {
    return (
        <Container>
        </Container>
    );
};
