import React from 'react';
import PropTypes from 'prop-types';
import vacationRentalProductType from './types';
import './VacationRentalsProductList.css'
import VacationRentalsProduct from './VacationRentalsProduct';

export default class VacationRentalsProductList extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      vacationRentalProductType.isRequired,
    ).isRequired,
    onCartAdd: PropTypes.func.isRequired,
  }

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