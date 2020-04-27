import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarFilled = (props) => {
  const { id, index } = props

  return (
    <span key={`star-half-${id}-${index}`} className={'fa-stack star-stacked'}>
      <FontAwesomeIcon
        icon={faStar}
        className={'fa-stack-1x filled-star'}
        key={`star-${id}-${index}-b`}>
      </FontAwesomeIcon>
      <FontAwesomeIcon
        icon={farStar}
        key={`star-${id}-${index}-a`}
        className={`fa-stack-1x`}>
      </FontAwesomeIcon>
    </span>
  )
}

StarFilled.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default StarFilled;
