import React from 'react';
import PropTypes from 'prop-types';

const Payment = (props) => {
  const { cost, description } = props.payment

  return (
    <div className={'payment-container'}>
      <p><b>Cost per night:</b> {`$${cost} USD`}</p>
      { description.length > 0
        ? <p><b>{description}</b></p>
        : null
      }
    </div>
  )
}

Payment.propTypes = {
  payment: PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
}

export default Payment;
