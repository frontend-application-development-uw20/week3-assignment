import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBuilding, faChartBar, faMoneyBillWave, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import vacationRentalProductType from './types';
import './VacationRentalsProduct.css'

export default class VacationRentalsProduct extends React.Component {

  static propTypes = {
    product: vacationRentalProductType.isRequired,
    onCartAdd: PropTypes.func.isRequired,
  }

  //At minimum, your UI should display the title, image, and payment information.
  render() {
    const {product, onCartAdd} = this.props;
    const {location, payment, host, rating} = product;

    return (
      <article>      
        <span className='image' style={{backgroundImage: `url(${product.image})`}}></span>

        <header>{product.title}</header>
        <button onClick={(e) => onCartAdd(e, product)} className="btn-add icon-primary"><FontAwesomeIcon  icon={faCartPlus} /></button>

        <div>
          <span className="icon-secondary"><FontAwesomeIcon icon={faGlobe} /></span>
          <span className="data">{location.city}</span>, <span className="data">{location.country}</span>
        </div>

        <div>
          <span className="icon-secondary" ><FontAwesomeIcon icon={faBuilding} /></span> 
          <span className="data">{product.houseType}</span> (hosted by <span className="data">{host.name}</span>)
        </div>

        <div>
          <span className="icon-secondary" ><FontAwesomeIcon icon={faChartBar} /></span>
          <span className="data">{rating.stars}</span> stars (<span className="data">{rating.reviews}</span> reviews)
        </div>

        <div>
          <span className="icon-secondary"><FontAwesomeIcon icon={faMoneyBillWave} /></span>
          $<span className="data">{payment.cost}</span> / day 
          {payment.description !== '' &&  <> (<span className="data">{payment.description}</span>)</>}
        </div>
      </article>
    );
  }
}