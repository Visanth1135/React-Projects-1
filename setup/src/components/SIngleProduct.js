import React from 'react'
import { Card, Button } from "react-bootstrap";


const SingleProduct = ({p}) => {
  return (
    
      <Card className='card-class'>
        <Card.Img variant="top" src={p.img} alt={p.name} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Subtitle>
            <span>₹ {p.price}</span>
            <Button
              
               
                
              
              disabled={!p.Instock}
            >
              {!p.Instock ? "Out of Stock" : "Add to Cart"}
            </Button>
            </Card.Subtitle>
            </Card.Body>
            </Card>
            
  )
}

export default SingleProduct