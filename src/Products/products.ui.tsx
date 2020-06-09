import React from "react";
import {IProduct} from "./i.product";
import {Container, Grid} from "semantic-ui-react";
import {Product} from "../Product/product";

interface Props {
    products: IProduct[]
}
export const ProductsUI: React.FC<Props> = ({products}) => {
    return (
        <Container>
            <Grid>
                { products.map((v,i) => (
                    <Grid.Column key={v.productId}>
                        <Product product={v}/>
                    </Grid.Column>
                ))}
            </Grid>
        </Container>
    );
};
