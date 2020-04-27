import React from 'react';
import PropTypes from 'prop-types';
import Stars from './stars';

const Rating = (props) => {
  const { id } = props;
  const { stars, reviews } = props.rating

  return (
    <div className={'rating-container'}>
      <p><b>Rating: </b>
        <Stars
          stars={stars}
          id={id}></Stars>
        {` (${reviews} reviews)`}
      </p>
    </div>
  )
}

Rating.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.shape({
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
}

export default Rating;
