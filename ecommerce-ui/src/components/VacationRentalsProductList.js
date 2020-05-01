import React from 'react';
import './VacationRentalsProductList.css'
import VacationRentalsProduct from './VacationRentalsProduct';

export default class VacationRentalsProductList extends React.Component {
  render() {
    const {products, onCartAdd} = this.props;

    return (
      <>
        <header className="header-primary">Available Vacation Rentals</header>

        <div className="container-product-list">
          {products.map((product, index) => 
            <VacationRentalsProduct key={index} product={product} onCartAdd={onCartAdd} />)}
        </div>
      </>
    );
  }
}