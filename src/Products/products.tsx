import React from 'react';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import {ProductsUI} from "./products.ui";
import {ProductsLoading} from "./products.loading";
import {ProductsError} from "./products.error";


export const GET_PRODUCTS = gql`{
    getProducts {
        productId
        title
        price
    }
}`;

export const Products: React.FC = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    if (loading) return <ProductsLoading />;
    if (error) return <ProductsError />;
    return <ProductsUI />
};
