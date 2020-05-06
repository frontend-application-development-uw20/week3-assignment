import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import vacationRentalProductType from './types';
import './VacationRentalsShoppingCart.css';


// Class component:
// Represents the shopping cart for vacation rentals.
class VacationRentalsShoppingCart extends React.Component {
  // Be displayed next to the vacation rentals.
  // Allow the user to remove a vacation rental from the cart if they change their mind.
  // Display the total payment due based on the vacation rentals in the cart.

  static propTypes = {
    cartItems: PropTypes.arrayOf(
      vacationRentalProductType.isRequired,
    ).isRequired,
    onCartRemove: PropTypes.func.isRequired,
  }

  computeTotalPayment() {
    const payment = this.props.cartItems.reduce((accum, item) => accum + item.payment.cost, 0);
    return payment;
  }

  computeProductCount() {
    const {cartItems} = this.props;
    const count = (cartItems.length > 0) ? cartItems.length : 0;
    return count;
  }

  render() {
    const {onCartRemove, cartItems} = this.props;

    return (
      <>
        <header className="header-primary">Shopping Cart</header>

        <div className="container-shopping-cart">

          <span className="fa-layers fa-fw icon">
            <FontAwesomeIcon className="cart" icon={faShoppingCart} />
            <span className="fa-layers-counter cart-count">{this.computeProductCount()}</span>
          </span>

          <div className="payment-info total">
            <span className="row-title">Total:</span>&nbsp;
            <span className="price">${this.computeTotalPayment()}</span> / day
          </div>

          {cartItems.map((cartItem, index) => <VacationRentalsShoppingCartItem key={index} index={index} cartItem={cartItem} onCartRemove={onCartRemove} />)}
        </div>
      </>
    );
  }
}


// Function component:
// Represents a vacation rental that has been placed in the shopping cart.
function VacationRentalsShoppingCartItem(props) {
  const {cartItem, index, onCartRemove} = props;
  const {location, payment} = cartItem;

  return (
    <div className="container-shopping-cart-item">
      
      <span className='image' style={{backgroundImage: `url(${cartItem.image})`}}></span>

      <div>
        <span className="row-title">Location:</span> {location.city}, {location.country}
      </div>

      <div>
        <span className="row-title">Description:</span> {cartItem.title}
      </div>

      <div className="payment-info">
        <span className="row-title">Price:</span>&nbsp;
        <span className="price">${payment.cost}</span> / day&nbsp;
        <span className="payment-description">
          {payment.description !== '' &&  <> (<span>{payment.description}</span>)</>}
        </span>
      </div>

      <button className="btn-remove" onClick={(e) => onCartRemove(e, index)}>Remove</button>
      
    </div>
  );
}
VacationRentalsShoppingCartItem.propTypes = {
  index: PropTypes.number.isRequired,
  cartItem: vacationRentalProductType.isRequired,
  onCartRemove: PropTypes.func.isRequired,
}


// Function component:
// Represents toggling the display of the shopping cart.
function VacationRentalsShoppingCartToggle(props) {
  const {displayCart, onCartToggleDisplay} = props;

  const buttonText = displayCart
    ? <><span>Hide</span></>
    : <><FontAwesomeIcon icon={faShoppingCart} /><span>Show</span></>

  return (
    <div className="shopping-cart-toggle">
      <button onClick={onCartToggleDisplay}>{buttonText}</button>
    </div>
  );
}
VacationRentalsShoppingCartToggle.propTypes = {
  displayCart: PropTypes.bool.isRequired,
  onCartToggleDisplay: PropTypes.func.isRequired,
}

export { VacationRentalsShoppingCart, VacationRentalsShoppingCartToggle };