import React from 'react';
import BasicInfo from './BasicInfo.js';
import CartItems from './CartItems.js';
import Airbnbs from './airbnbs.json';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            total: 0,
            inCart: false
        }
    }

    addItemToCart = (e) => {
        e.preventDefault();
        const updatedCartItems = {
            title: [Airbnbs[0]].title
        }
        this.setState ({
            cartItems: [...this.state.cartItems, updatedCartItems],
            inCart: true
        })
    }

    removeItem = (e) => {
        e.preventDefault();
        this.setState ({
            cartItems: [],
            inCart: false
        })
    }

    render() {

        const { cartItems } = this.props;

        return (
            <div>
                <BasicInfo addToCart={this.addItemToCart}/>
                <CartItems cartItems={this.state.cartItems} removeFromCart={this.removeItem}/>
            </div>

        )
    }
}

export default ShoppingCart;