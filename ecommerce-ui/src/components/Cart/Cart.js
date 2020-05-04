import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

const Cart = (props) => {

  const cartTotal = () => {
    let total = 0;
    props.items.forEach(item => {
      total = total + item.cost;
    })
    return total;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Shopping Cart</Card.Title>
            {props.items.map(item => (
              <div style={{display:'inline-block', fontSize:'12px', paddingBottom:'15px'}}>
                <div>{item.title}</div>
                <div>${item.cost}</div>
                <Button variant={"primary"} onClick={props.removeItem} value={JSON.stringify(item)}>Remove Item</Button>
              </div>
            ))}
          <div style={{paddingTop:'25px'}}>
            <p>Cart total is ${cartTotal()}</p>
          </div>
        <Button variant="primary" >Checkout</Button>
      </Card.Body>
    </Card>
  )
}

export default Cart;

Cart.propTypes = {
  removeItem: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      cost: PropTypes.number,
      host: PropTypes.string
    })
  )
}
