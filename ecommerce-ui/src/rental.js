import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './cart';

class Rental extends Component {
    constructor(props) {
        super(props)
        this.state = { checkout: [] }
    };
    static propTypes = {
        rData: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                houseType: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                location: PropTypes.shape({
                    city: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired
                }).isRequired,
                payment: PropTypes.shape({
                    cost: PropTypes.number.isRequired,
                    description: PropTypes.string.isRequired
                }).isRequired,
                rating: PropTypes.shape({
                    stars: PropTypes.number.isRequired,
                    reviews: PropTypes.number.isRequired
                }).isRequired
            })
        )
    }

    addToCart = (rental, price) => {
        // const checkout = this.state.checkout;
        return (e) => {
            e.preventDefault();
            let id = this.state.checkout.length + 1;
            //checkout.push({ id, rental, price })
            // this.setState({ checkout });
            this.setState({ checkout: [...this.state.checkout, { id, rental, price }] })
            // console.log('*****' + JSON.stringify(this.state.checkout));
            // alert('*****' + id + '   ' + JSON.stringify(this.state.checkout));
        }
    }

    removeFromCart = (id) => {
        return (e) => {
            e.preventDefault();
            // alert(id + ' ' + rental + ' is removed from your cart');
            const newCheckout = this.state.checkout.filter(rental => rental.id !== id);
            // console.log(JSON.stringify(newCheckout));

            this.setState({ checkout: newCheckout });
            // console.log(JSON.stringify(this.state.checkout));
        }
    }

    render() {
        return (
            <div>
                <main>
                    {
                        this.props.rData.map((x, i) =>
                            <dl key={i}>
                                <dt> {x.title}</dt>
                                <dd><img src={x.image} className="imgSize2" alt="rental" /></dd>
                                <dd> {x.location.city} <span> cost: ${x.payment.cost} </span>
                                    <button onClick={this.addToCart(x.title, x.payment.cost)} type="button">Add to Cart</button></dd>
                                <dd> {x.payment.description}   </dd>
                                <dd> <span> stars: {x.rating.stars}</span> reviews: {x.rating.reviews}</dd>
                            </dl >
                        )
                    }
                </main>

                < ShoppingCart removeRental={this.removeFromCart} checkout={this.state.checkout} />

            </div>
        )
    }
}

export default Rental;