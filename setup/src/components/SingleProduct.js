import React from 'react'
import { Card, Button } from "react-bootstrap";
import { CartState } from '../context/Context';

const SingleProduct = ({p}) => {
    const {state:{ cart },dispatch} = CartState()
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={p.image} alt={p.name} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {p.price}</span>
            <Button
              onClick={() =>
                dispatch({
                    type:'ADD_TO_CART',
                    payload:p
                })
                
              }
              disabled={!p.inStock}
            >
              {!p.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
            </Card.Subtitle>
            </Card.Body>
            </Card>
            </div>
  )
}

export default SingleProduct