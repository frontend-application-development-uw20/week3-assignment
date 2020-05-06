import React from 'react';
import airbnbs from '../data/airbnbs.json';
import './VacationRentalsMain.css';
import VacationRentalsProductList from './VacationRentalsProductList';
import {VacationRentalsShoppingCart, VacationRentalsShoppingCartToggle} from './VacationRentalsShoppingCart';

export default class VacationRentalsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      displayCart: true,
    }
  }

  handleCartAdd = (e, product) => {
    this.setState((state) => {
      return {cartItems: [...state.cartItems, product]};
    });
  }

  handleCartRemove = (e, index) => {
    this.setState((state) => {
      const newCartItems = [...state.cartItems];
      newCartItems.splice(index, 1);
      return {cartItems: newCartItems};
    });
  }

  handleCartToggleDisplay = (e) => {
    this.setState((state) => {
      return {displayCart: !state.displayCart};
    })
  }

  render() {
    const {cartItems, displayCart} = this.state;

    return(    
      <div className="container-main">
        
        <section id="productList">
          <VacationRentalsProductList products={airbnbs} onCartAdd={this.handleCartAdd} />
        </section>

        {/* BONUS: Make the shopping cart hideable/showable, in order to avoid clutter. This could be implemented as a hide/show cart button. */}
        <section id="shoppingCartToggle">
          <VacationRentalsShoppingCartToggle displayCart={displayCart} onCartToggleDisplay={this.handleCartToggleDisplay} />
        </section>

        <section id="shoppingCart" className={displayCart ? 'cart-show' : 'cart-hide'}>
          <VacationRentalsShoppingCart cartItems={cartItems} onCartRemove={this.handleCartRemove} />
        </section>

      </div>
    );
  }
}