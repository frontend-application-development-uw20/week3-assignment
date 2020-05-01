import React from 'react';
import airbnbs from '../data/airbnbs.json';
import './VacationRentalsMain.css';
import VacationRentalsProductList from './VacationRentalsProductList';
import VacationRentalsShoppingCart from './VacationRentalsShoppingCart';

export default class VacationRentalsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
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

  render() {
    const cartItems = this.state.cartItems;

    return(    
      <div className="container-main">
        
        <section id="productList">
          <VacationRentalsProductList products={airbnbs} onCartAdd={this.handleCartAdd} />
        </section>

        <section id="shoppingCart">
          <VacationRentalsShoppingCart cartItems={cartItems} onCartRemove={this.handleCartRemove} />
        </section>

      </div>
    );
  }
}