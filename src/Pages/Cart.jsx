import React, { useRef } from 'react'
import './Cart.css'

const Cart = (props) => {
  const { state } = props.cartContext;
  const finalPrice = useRef(0);
  return <>
    <div>
      <br />
      <br />
      <br />
      <br />
      {
        state.map(data => {
          finalPrice.current = finalPrice.current + (data.price * data.qty);
          return <div className="cart-items">
            <img src={data.images[0]} height="200px" width="200px" />
            <div> {data.title} </div>
            <div> ${data.price} * {data.qty} </div>
          </div>
        })
      }
    </div>
    <hr style={{width: "57%", marginLeft: "23%"}}/>
    <br/>
    <div style={{marginLeft: "23%"}}> <b>Total</b>: ${finalPrice.current}</div>
  </>
}

export default Cart
