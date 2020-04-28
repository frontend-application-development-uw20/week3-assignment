import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cart from './cart-icon.svg'

class ShoppingCart extends Component {

    static propTypes = {
        checkout: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                rental: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired
            })
        ).isRequired,
        removeRental: PropTypes.func.isRequired
    }

    render() {
        const { checkout, removeRental } = this.props;

        // alert('checkout.length ' + checkout.length + ' ' + JSON.stringify(checkout));
        return (
            <aside>
                <img src={cart} className="shoppingCart" alt="Shopping Cart" />
                <ul>
                    {checkout.length === 0 ? (<p>No Rental Selected</p>) : (

                        checkout.map((cart) =>
                            <li key={cart.id}>   {cart.rental}   ${cart.price} /night
                                <button onClick={removeRental(cart.id, cart.rental
                            )} type="button">Remove</button>
                            </li>)

                    )
                    }
                    <span className="total">Total = ${checkout.reduce((total, rental) => parseFloat(total) + parseFloat(rental.price), 0)}</span>
                </ul>
            </aside>
        )
    }
}
export default ShoppingCart;