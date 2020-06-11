import React from "react";
import {IProduct} from "../Products/i.product";

interface Props {
    product: IProduct
}

export const ProductUI: React.FC<Props> = ({product}) => {
    return (
        <div className="bg-white h-48 w-48 rounded-lg p-3 shadow-md">
            <h3 className="text-base">{product.title}</h3>
        </div>
    );
};
