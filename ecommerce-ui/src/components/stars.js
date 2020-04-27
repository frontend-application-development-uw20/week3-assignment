import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import StarHalf from './starHalf';
import StarFilled from './starFilled';

const Stars = (props) => {
  const { id, stars } = props

  const starIcons = () => {
    let iconArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        iconArray.push(
          <StarFilled
            index={i}
            id={i}
            key={`star-${id}-${i}`}>
          </StarFilled>
        );
      } else if (i === Math.ceil(stars)) {
        iconArray.push(
          <StarHalf
            index={i}
            id={id}
            key={`star-${id}-${i}`}
          >
        </StarHalf>
        );
      } else {
        iconArray.push(
          <span
            className={'empty-star'}
            key={`empty-star-${id}-${i}`}
          >
            <FontAwesomeIcon
              icon={farStar}
              key={`star-${id}-${i}`}
            >
            </FontAwesomeIcon>
          </span>
        );
      }
    }
    return iconArray;
  }


  return (
    <span className={'stars-container'}>
      {starIcons()}
    </span>
  )
}

Stars.propTypes = {
  id: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
}

export default Stars;
