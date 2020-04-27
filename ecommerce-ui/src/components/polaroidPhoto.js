import React from 'react';
import PropTypes from 'prop-types';

const PolaroidPhoto = (props) => {
  const { image, location } = props
  const caption = `${location.city} ${location.country}`

  return (
    <div className={'polaroid-container'}>
      <img
        src={image}
        alt={'alt here'}
      />
      <p className={'caption'}>{caption}</p>
    </div>
  )
}

PolaroidPhoto.propTypes = {
  image: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
}

export default PolaroidPhoto;
