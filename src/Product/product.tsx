import React from 'react';
import {IProduct} from "../Products/i.product";
import {ProductUI} from "./product.ui";

interface Props {
    product: IProduct
}
export const Product: React.FC<Props> = ({product}) => {

    return (
        <ProductUI product={product}/>
    );
};
