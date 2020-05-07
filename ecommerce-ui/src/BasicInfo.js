import React from 'react';
import './BasicInfo.css';
import ListingLayout from './ListingLayout.js';
import Airbnbs from './airbnbs.json';
import PropTypes from 'prop-types';

class BasicInfo extends React.Component {

    static propTypes = {
        airbnbs: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            cost: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isSuperhost: PropTypes.bool.isRequired,
            stars: PropTypes.string.isRequired,
            reviews: PropTypes.string.isRequired
            })
    }

    render() {
        
        const { addToCart} = this.props;

        return(
            <div class="container">
                    {Airbnbs.map((airbnb, idx) => 
                        <ListingLayout key={idx} airbnb={airbnb} addToCart={addToCart(idx)} />                    
                    )}
            </div>
        )

    }

}

export default BasicInfo;