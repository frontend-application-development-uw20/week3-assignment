import React from 'react';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  const { cartItem, deleteCartItem } = props;
  const { id, qty, title, cost } = cartItem;
  const nights = (qty > 1 ? 'nights' : 'night ');
  const total = qty * cost;

  const handleDeleteClick = (e) => {
    e.preventDefault();
    console.log('delete', id);
    deleteCartItem(id);
  }

  return (
    <div className={'cart-item'}>
      <p><b>{title}</b></p>
      <p>{`${qty} ${nights} at $${cost} per night.`}</p>
      <p className={'cart-total'}>
        <span
          className={'cart-item-delete fake-link'}
          onClick={handleDeleteClick}
        >
          delete
        </span>
        {`$${total}`}
      </p>
    </div>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
  deleteCartItem: PropTypes.func.isRequired,
}

export default CartItem;
