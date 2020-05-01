import React from 'react';
import BasicInfo from './BasicInfo.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    addItemToCart = (e) => {
        e.preventDefault();
        this.setState ({})
    }


    render() {
        const { listing } = this.props;

        return (
            <div>
                <p>{shoppingCart}</p>
                <BasicInfo listing={listing} addToCart={this.addItemToCart}/>
            </div>

        )
    }
}

export default MainPage;