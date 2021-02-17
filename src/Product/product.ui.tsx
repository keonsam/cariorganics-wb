import React from "react";
import {IProduct} from "../Products/i.product";
import placeholder from '../images/product.jpg';

interface Props {
    product: IProduct
}

export const ProductUI: React.FC<Props> = ({product}) => {
    const link = "https://via.placeholder.com/150";
    return (
        <div className="bg-white w-48 rounded-lg p-3 shadow-md">
            <img src={link} className="h-40 w-40" alt="image of product"/>
            <h3 className="text-base mt-2 text-base">{product.title}</h3>
            <span className="block mt-1 text-sm opacity-75">{product.size || 'undefined'}</span>
            <span className="block text-base mt-1 text-right">${product.price}</span>
        </div>
    );
};
