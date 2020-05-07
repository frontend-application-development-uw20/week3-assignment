import React from 'react';
import BasicInfo from './BasicInfo.js';
import CartItems from './CartItems.js';
import Airbnbs from './airbnbs.json';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            total: 0
        }
    }

    addItemToCart = (idx) => {
        return (e) => {
            e.preventDefault();
            const totalCost = this.state.total + Airbnbs[idx].payment.cost;
            this.setState({
                cartItems: [...this.state.cartItems, Airbnbs[idx].title],
                total: totalCost
            })
        }
    }

    removeItem = (idx) => {
        return (e) => {
            const removedCartItems = this.state.cartItems.filter(function(item, itemIdx) {
                if (idx !== itemIdx)
                    return item;
            });
            this.setState ({
                cartItems: removedCartItems
            })
        }
    }

    render() {

        const { addButton } = this.props;

        return (
            <div>
                <BasicInfo airbnb={this.state.airbnb} addToCart={this.addItemToCart}/>
                <CartItems cartItems={this.state.cartItems} removeFromCart={this.removeItem} total={this.state.total}/>
            </div>

        )
    }
}

export default ShoppingCart;