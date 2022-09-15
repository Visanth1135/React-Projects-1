import React, { useState } from 'react'
import { Card, Button } from "react-bootstrap";
import { addProduct } from "../redux/CartRedux";
import { useDispatch } from "react-redux";


const SingleProduct = ({p}) => {
  const [product, setProduct]=useState(p)
  console.log(product)
  const dispatch = useDispatch();
  const handleClick = () => {
    
    dispatch(
      addProduct({ ...product})
    );
  };
  return (
    
      <Card className='card-class'>
        <Card.Img variant="top" src={p.img} alt={p.name} />
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Subtitle>
            <span>${p.price}</span>
            <Button disabled={!p.Instock} onClick={handleClick}>
              {!p.Instock ? "Out of Stock" : "Add to Cart"}
            </Button>
            </Card.Subtitle>
            </Card.Body>
            </Card>
            
  )
}

export default SingleProduct