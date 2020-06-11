import React from "react";
import {IProduct} from "./i.product";
import {Product} from "../Product/product";

interface Props {
    products: IProduct[]
}
export const ProductsUI: React.FC<Props> = ({products}) => {
    return (
        <div className="container">
            <ul>
                { products.map((v,i) => (
                    <li key={v.productId}>
                        <Product product={v}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
