import React from 'react';
import './BasicInfo.css';
import Manhattan from './Manhattan.js';
import Denver from './Denver.js';
import Gamla from './Gamla.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Airbnbs from './airbnbs.json';

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { addToCart } = this.props;

        return(
                <div>
                    <Manhattan class="column left" addToCart={addToCart}/>
                    <Denver class="column left" addToCart={addToCart}/>
                    <Gamla class="column left" addToCart={addToCart}/>
                    <h1 class="column left">Cart {shoppingCart}</h1>
                </div>
        )

    }

}

export default BasicInfo;