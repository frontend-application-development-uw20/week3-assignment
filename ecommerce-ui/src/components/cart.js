import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartItemsList from './cartItemsList';

class Cart extends React.Component {
  static propTypes = {
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
      })
    ).isRequired,
    deleteCartItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      displayCart: false,
    }
    this.handleCartDisplay = this.handleCartDisplay.bind(this);
    // this.handleAddPropertyToCart = this.handleAddPropertyToCart.bind(this);
    // this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  // cartTotalItems() {
  //   const total = 0;
  //   // return this.props.cartItems.map((cartItem) => { return cartItem.qty } )
  //   console.log(this.props.cartItems);
  //   // const cartTotals = this.props.cartItems.map((cartItem) => { return cartItem.qty } )
  //   // console.log(cartTotals);
  //   // return cartTotals.reduce((0, itemTotal), 0);
  //   return this.props.cartItems.map((cartItem) => { return cartItem.qty } ).reduce((acc, val) => { return acc + val }, 0);
  // }
  // handleAddPropertyToCart(e) {
  //   e.preventDefault();
  //   this.props.addPropertyToCart(this.props.id, this.state.qty);
  // }

  // handleChangeQuantity(e) {
  //   console.log(e.target.value)
  //   this.setState({ qty: Number(e.target.value) })
  // }

  handleCartDisplay(e) {
    const displayCart = !this.state.displayCart
    this.setState({
      displayCart: displayCart,
    })
  }

  render() {
    return (
      <div className={`cart-container ${this.state.displayCart ? null : 'cart-hidden'}`}>
        <div className={'cart-indicator'}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={'cart-icon'}
            onClick={this.handleCartDisplay}
          >
          </FontAwesomeIcon>
          { this.props.cartItems.length > 0
            ? <div
                className={'cart-items-count'}
                onClick={this.handleCartDisplay}
              >
                {this.props.cartItems.length}
              </div>
            : null
          }
        </div>
        { this.props.cartItems.length > 0
          ? <CartItemsList
              cartItems={this.props.cartItems}
              deleteCartItem={this.props.deleteCartItem}
            >
            </CartItemsList>
          : <p className={'cart-items-list'}>Your cart is empty.</p>
        }

      </div>
    )
  }
}

export default Cart;
