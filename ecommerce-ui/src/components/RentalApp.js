import React from 'react';
import properties from '../_data/airbnbs.json';
import PropertyList from './propertyList';
import Cart from './cart';
import AddProperty from './addProperty';

// still needs proptypes
class RentalApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      properties: [...properties],
    }
  }

  addPropertyToCart = (id, qty) => {
    const existingCartItem = this.state.cartItems.find((cartItem) => { return cartItem.id === id })
    if (existingCartItem) {
      this.updateCartItemQuantity(id, qty);
    } else {
      this.addCartItem(id, qty);
    }
  }

  updateCartItemQuantity = (id, qty) => {
    const newCartItems = this.state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          qty: cartItem.qty + qty,
        }
      } else {
        return {
          ...cartItem
        }
      }
    });
    this.setState({ cartItems: [...newCartItems] });
  }

  addCartItem = (id, qty) => {
    const propertyInfo = this.state.properties[id]
    const { title, payment } = propertyInfo
    const cartItem = {
      id: id,
      qty: qty,
      title: title,
      cost: payment.cost,
     }
    this.setState({ cartItems: [...this.state.cartItems, cartItem] } );
  }

  deleteCartItem = (id) => {
    const newCartItems = this.state.cartItems.filter(cartItem => cartItem.id !== id);
    this.setState({ cartItems: [...newCartItems] });
  }

  addPropertyListing = (newProperty) => {
    const newProperties = this.state.properties.map((property) => { return property });
    this.setState({ properties: [...newProperties, newProperty]});
  }

  render() {
    return (
      <div className={'main-content'}>
        <AddProperty
          addPropertyListing={this.addPropertyListing}
        >
        </AddProperty>
        <PropertyList
          properties={this.state.properties}
          addPropertyToCart={this.addPropertyToCart}
        >
        </PropertyList>
        <Cart
          cartItems={this.state.cartItems}
          deleteCartItem={this.deleteCartItem}
        >
        </Cart>
      </div>
    )
  }
}

export default RentalApp;
