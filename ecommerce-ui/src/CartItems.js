import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

class CartItems extends React.Component {

    render() {
        const { cartItems, removeFromCart, total } = this.props;

        
        if (cartItems.length === 0) {
            return(
                <div>
                    <h1 class="cart">Cart {shoppingCart}</h1>
                    <p>Your cart is empty.</p>
                </div>
            )
        } else {
            return(
                <div>
                    <h1 class="cart">Cart {shoppingCart}</h1>
                    {cartItems.map((cartItem, idx) =>
                        <div>
                            <p>{cartItem} <button onClick={removeFromCart(idx)}>Remove from cart</button></p>
                       </div>
                    )} 
                    <h1>Total: ${total}</h1>
                </div>
            )
        }
    }

}

export default CartItems;