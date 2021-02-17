import React from "react";
import {IProduct} from "./i.product";
import {Product} from "../Product/product";

interface Props {
    products: IProduct[]
}
export const ProductsUI: React.FC<Props> = ({products}) => {
    return (
        <div className="container">
            <ul className="grid grid-cols-none gap-1">
                { products.map((v,i) => (
                    <li key={v.productId} className="w-48">
                        <Product product={v}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
