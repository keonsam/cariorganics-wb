import React from "react";
import {IProduct} from "../Products/i.product";
import {Card, Image} from "semantic-ui-react";
import img from "../images/product.jpeg";

interface Props {
    product: IProduct
}

export const ProductUI: React.FC<Props> = ({product}) => {
    return (
        <Card>
            <Image src={img} wrapped ui={false} size="small" />
            <Card.Content>
                <Card.Header>{product.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{product.price}</span>
                </Card.Meta>
            </Card.Content>
        </Card>
    );
};
