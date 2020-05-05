import React from 'react';
import Airbnbs from './airbnbs.json';

class CartItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cartItems, removeFromCart } = this.props;

        if (cartItems.length === 0) {
            return(
                <div>
                    <p>Your cart is empty.</p>
                </div>
            )
        } else {
            return(
            <div>
                
                    <div>
                        <p>{cartItems.title}</p><button onClick={removeFromCart}>Remove from cart</button>
                    </div>
                
            </div>
        )
        }
    }

}

export default CartItems;