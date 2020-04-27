import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const Host = (props) => {
  const { name, isSuperhost } = props.host

  return (
    <div className={'host-container'}>
      <p><b>Host: </b>
      { isSuperhost
        ? <FontAwesomeIcon
            icon={faAward}
            className={'superhost'}
          >
          </FontAwesomeIcon>
        : null
      }
      {name}
      </p>
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isSuperhost: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Host;
