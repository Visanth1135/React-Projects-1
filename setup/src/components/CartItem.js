import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../store/cart";

const CartItem = ({ id, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article>
      <div className="flexi">
        <h3>{title}</h3>
        <h3>{price}</h3>
        <button onClick={() => dispatch(increase(id))}>+</button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          -
        </button>

        <button onClick={() => dispatch(removeItem(id))}>Remove</button>
      </div>
    </article>
  );
};

export default CartItem;
