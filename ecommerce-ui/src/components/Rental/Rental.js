import React from "react";
import './Rental.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import dummy from './dummy.png';
import superhost from './Superhost.png'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Rental = props => {

  const rentals = []
  const cartItems = props.cartItems;

  function isInCart(rentalObj) {
    let answer = false
    if(cartItems.length > 0) {
      cartItems.forEach(item => {
        if(item.host === rentalObj.host.name){
          answer = true;
        }
      })
    }
    return answer;
  }

  props.data.forEach((rentalObj) => {
    rentals.push(
      <div className="card flex-row" style={{paddingBottom:'10px'}}>
        <div className="card-header border-0">
          <img src={rentalObj.image} alt=""/>
        </div>
        <div className="card-block px-2">
          <h4 className="card-title" style={{paddingTop:'10px'}}>{rentalObj.title}</h4>
          <p className="card-text" style={{display:"inline-block", marginRight:"20px", textAlign: 'left', fontSize:'14px'}}>
            {rentalObj.houseType} in {rentalObj.location.city}, {rentalObj.location.country}
          </p>
          <p className="card-text" style={{ display:"inline-block", marginLeft:"20px", textAlign: 'right', fontSize:'12px'}}>
            <FontAwesomeIcon icon={faStar} color='red' fa-sm='true' fontSize='0.5rem'/>&nbsp;
            {rentalObj.rating.stars}&nbsp;({rentalObj.rating.reviews})
          </p>
          <div style={{paddingBottom:'50px'}}>
            <div style={{display:'inline-block', verticalAlign:'center'}}>
              {rentalObj.host.isSuperhost ?
                <img src={superhost} height={20} width={70} alt=""/> :
                null
              }&nbsp;
            </div>
            <div style={{display:'inline-block'}}>
              <img src={dummy} height={40} width={40} alt=""/>
              <p style={{fontSize:'12px'}}>{rentalObj.host.name}</p>
            </div>
          </div>
          <div style={{display:'inline-block'}}>
            <p style={{textAlign:'left'}}>${rentalObj.payment.cost}</p>
          </div>
          <div style={{display:'inline-block'}}>
            <p style={{textAlign:'right'}}>&nbsp;&nbsp;{rentalObj.payment.description}</p>
          </div>
          <div>
            {isInCart(rentalObj) ?
              <Button variant="primary" onClick={props.addItem} value={JSON.stringify(rentalObj)} disabled>
                Add to cart
              </Button> :
              <Button variant="primary" onClick={props.addItem} value={JSON.stringify(rentalObj)}>
                Add to cart
              </Button>
            }
          </div>
        </div>

      </div>
    );
  })

    return (rentals)
}

export default Rental;

Rental.propTypes = {
  addItem: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      houseType: PropTypes.string,
      image: PropTypes.string,
      location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
      }),
      payment: PropTypes.shape({
        cost: PropTypes.number,
        description: PropTypes.string,
      }),
      host: PropTypes.shape({
        name: PropTypes.string,
        isSuperhost: PropTypes.bool
      }),
      rating: PropTypes.shape({
        stars: PropTypes.number,
        reviews: PropTypes.number
      })
    })
  ),
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      cost: PropTypes.number,
      host: PropTypes.string
    })
  )
}
