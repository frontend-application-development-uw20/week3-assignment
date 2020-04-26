import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faDollarSign, faMedal, faStar } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function GeneralInfo(props) {
  return(
    <div>
      <h2>{props.input.title}</h2>
      <img alt={props.input.image} src={props.input.image}/>
      <div>
        <FontAwesomeIcon icon={faBuilding}/> {props.input.houseType} <FontAwesomeIcon icon={faMapMarkerAlt}/> {props.input.location.city}, {props.input.location.country}
      </div>
  </div>
  )
}

function Payment(props) {
  return(
    <div>
      <FontAwesomeIcon icon={faDollarSign}/>{props.input.cost} {props.input.description}
    </div>
  )
}

function Host(props) {
  const isSuperhost = props.input.isSuperhost;
  return(
    <div>
      <FontAwesomeIcon style={ !isSuperhost ? {display: 'none'} : {}} icon={faMedal}/> {props.input.name}
    </div>
  )
}

function Ratings(props) {
  return(
    <div>
      <FontAwesomeIcon icon={faStar}/>{props.input.stars} over {props.input.reviews} reviews
    </div>
  )
}

class ShopItems extends React.Component {
  static propTypes = {
    shopitems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        houseType: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.shape({
          city: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired
        }).isRequired,
        payment: PropTypes.shape({
          cost: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired
        }).isRequired,
        host: PropTypes.shape({
          name: PropTypes.string.isRequired,
          isSuperhost: PropTypes.bool.isRequired
        }).isRequired,
        rating: PropTypes.shape({
          stars: PropTypes.number.isRequired,
          reviews: PropTypes.number.isRequired
        }).isRequired
      })
    ).isRequired,
  }

  render() {
    const {shopitems, additems} = this.props;

    return(
      <div>
        <Grid container spacing={3}>
        {shopitems.map(
          (item, index) =>
          <Grid item xs={6} key={index} id={`shopItem${index}`}>
            <GeneralInfo input={item}/>
            <Payment input={item.payment}/>
            <Host input={item.host}/>
            <Ratings input={item.rating}/>
            <Button variant="contained" id={`addBtnItem${index}`} onClick={additems}>ADD TO CART</Button>
          </Grid>
        )}
        </Grid>
      </div>
    )
  }

}

export default ShopItems;
