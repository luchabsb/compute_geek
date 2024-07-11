import React from 'react'

import { Card, Button, CardTitle, CardText } from 'reactstrap'

const Product = (props) => {
    return (
        <Card className='card'>
            <img className='product--image' src={props.image} alt='' />
            <CardTitle> {props.name}</CardTitle>
            <CardText className='price'> $ {props.price} </CardText>
            <p>
               <Button>Añadir al carrito</Button>
            </p>
        </Card>
    );
}

export default Product;
