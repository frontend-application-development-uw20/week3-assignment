import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart.js';

class GetPropertyData extends React.Component {

  render () {
    return (
      this.props.propertyData.map((property, i) => {
        return (
          <div className="wrapper" key={i}>
            <div className="image">
              <img src={property.image} alt="" height='250' width='400'/>
            </div>
            <div className="location">{property.location.city},{' '}
              {property.location.country}
            </div>
            <div className="description">{property.houseType}</div>
            <div className="rating">{property.rating.stars}\5{' '}Stars
              {'  '}{property.rating.reviews}{' '}Reviews
            </div>
            <div className="title">{property.title}</div>
            <div className="price">Price ${property.payment.cost}</div>
            <div className="add-remove">
              <AddToCart
                info={property.title}
                cost={property.payment.cost}
                onHandleAddToCart={this.props.handleAddToCart}
             />
            </div>
          </div>
       );
      })
    );
  }
}
export default GetPropertyData;
