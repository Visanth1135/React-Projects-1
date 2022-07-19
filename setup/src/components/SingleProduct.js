import React from 'react'
import { Card, Button } from "react-bootstrap";
import { CartState } from '../context/Context';

const SingleProduct = ({prod}) => {
    const {state:{ cart },dispatch} = CartState()
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
            <Button
              onClick={() =>
                dispatch({
                    type:'ADD_TO_CART',
                    payload:prod
                })
                
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
            </Card.Subtitle>
            </Card.Body>
            </Card>
            </div>
  )
}

export default SingleProduct