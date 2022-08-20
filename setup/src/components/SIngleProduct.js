import React from 'react'
import { Card, Button } from "react-bootstrap";


const SingleProduct = ({p}) => {
  return (
    
      <Card className='card-class'>
        <Card.Img variant="top" src={p.image} alt={p.name} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {p.price}</span>
            <Button
              
               
                
              
              disabled={!p.inStock}
            >
              {!p.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
            </Card.Subtitle>
            </Card.Body>
            </Card>
            
  )
}

export default SingleProduct