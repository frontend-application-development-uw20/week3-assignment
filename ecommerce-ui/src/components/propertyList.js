import React from 'react';
import PropTypes from 'prop-types';
import PropertyListing from './propertyListing';

const PropertyList = (props) => {
  const { addPropertyToCart, properties } = props;

  return (
    <div className={'property-list-container'}>
      {properties.map((property, i) =>
        <PropertyListing
          property={property}
          key={i}
          id={i}
          addPropertyToCart={addPropertyToCart}>
        </PropertyListing>
      )}
    </div>
  )
}

PropertyList.propTypes = {
  addPropertyToCart: PropTypes.func.isRequired,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      houseType: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
      payment: PropTypes.shape({
        cost: PropTypes.number.isRequired,
        description: PropTypes.string,
      }).isRequired,
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isSuperhost: PropTypes.bool.isRequired,
      }).isRequired,
      rating: PropTypes.shape({
        stars: PropTypes.number.isRequired,
        reviews: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ),
}

export default PropertyList;
