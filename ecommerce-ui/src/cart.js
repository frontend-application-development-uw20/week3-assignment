import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [
                { id: 'Denver House', price: '11' },
                { id: 'St. Louis House', price: '12' }
            ],
            newCartItem: {
                id: '',
                price: ''
            },
        }
    }
    
    addCartItem = () => {
        this.setState({
            cartItems: [...this.state.cartItems, this.state.newCartItem],
            newCartItem: {
                id: '',
                price: ''
            }
        })
    }
      
    render() {
           
        return (
            <ul>
                {this.state.cartItems.map((items, idx) => (
                    <li
                    >{items.id} - {items.price}</li>
                ))}
            </ul>

        );
    }
}

export default Cart;
