import React from 'react';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../App.scss';

class ShoppingCart extends React.Component {
    static propTypes = {
        class: PropTypes.string,
        items: PropTypes.array,
        removeItem: PropTypes.func,
        toggleCart: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const { items } = this.props;
        const total = items.length > 0 ? items.map(item => parseInt(item.payment.cost)).reduce((accum, curr) => accum + curr) : '';
        return(
            <div className={this.props.class}>
                <h2>Shopping Cart</h2>
                <button className="close" onClick={this.props.toggleCart}><FontAwesomeIcon icon={faWindowClose} /></button>
                {items.length > 0 ? items.map(item => <CartItem removeItem={this.props.removeItem} item={item} key={item.title}/>) : "You have no items in your cart"}
                {items.length > 0 ? <p className="total">Total: ${total}</p> : null}
            </div>
        )
    }
}

export default ShoppingCart;