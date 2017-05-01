import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import DeleteProduct from './deleteProduct'

const style = {
};

const ProductCard = (props) => {
  const { product } = props
  return (
    <div style={style.ListProduct}>
      <Card fluid >
        <Image src={product.imageurl} size="medium" />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>Rp {product.price}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">Edit</Button>
            <DeleteProduct id={product.id}/>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductCard;
