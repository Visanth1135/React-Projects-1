import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../redux/CartRedux";

const CartItem = ({ id, name, price,img,qty, Instock}) => {
  const dispatch = useDispatch();

  return (
    
      <div className="card" style={{width: '300px'}}>
      <img class="card-img-top" src={img} alt="Card image cap"></img>
        <h3>{name}</h3>
        <h3>{price*qty}</h3>
        <button disabled={qty===Instock} onClick={() => dispatch(increase(id))}>+</button>
        <button disabled={qty===1}
          onClick={() => {
            dispatch(decrease(id));
          }}
        >
          -
        </button>

        <button onClick={() => dispatch(removeItem(id))}>Remove</button>
      </div>

  );
};

export default CartItem;