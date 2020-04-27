import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './cartItem';

const CartItemsList = (props) => {

  const total = (
    props.cartItems.map((cartItem) => {
      return cartItem.qty * cartItem.cost } ).reduce((acc, val) => { return acc + val }, 0)
  )

  return (
    <div className={'cart-items-list'}>
      {props.cartItems.map((cartItem) =>
        <CartItem
          cartItem={cartItem}
          key={cartItem.id}
          deleteCartItem={props.deleteCartItem}
        >
      </CartItem>
      )}
      { total > 0
        ? <p className={'cart-total'}><b>{`Total: $${total}`}</b></p>
        : null
      }
    </div>
  )
}

CartItemsList.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCartItem: PropTypes.func.isRequired,
}

export default CartItemsList;
