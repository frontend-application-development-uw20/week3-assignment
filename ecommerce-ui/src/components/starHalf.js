import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const StarHalf = (props) => {
  const { id, index } = props

  return (
    <span key={`star-half-${id}-${index}`} className={'fa-stack star-half'}>
      <FontAwesomeIcon
        icon={faStar}
        key={`star-${id}-${index}-a`}
        className={`fa-stack-1x`}>
      </FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faStarHalf}
        key={`star-${id}-${index}-b`}
        className={'fa-stack-1x'}>
      </FontAwesomeIcon>
    </span>
  )
}

StarHalf.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default StarHalf;
