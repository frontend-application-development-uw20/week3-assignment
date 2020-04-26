import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


class CartItems extends React.Component {

  render() {
    const {cartitems, removeitems, total} = this.props;

    if(cartitems.length === 0) {
      return(
        <div>
          <div className='EmptyCart'>Currently no items in cart.</div>
          <div>Total: ${total}</div>
        </div>
      )
    } else {
      return(
        <div className='ShoppingCart'>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
          {cartitems.map(
            (item, index) =>
              <Grid item key={index} id={`cartItem${index}`}>
                <div>
                  <div>{item.title}</div>
                  <img alt={item.image} src={item.image} className='cartImage'/>
                  <div>${item.payment.cost}</div>
                </div>
                <Button variant="contained" id={`removeBtnItem${index}`} onClick={removeitems(index)}>REMOVE</Button>
              </Grid>
          )}
          </Grid>
          <div>Total: ${total}</div>
        </div>
      )
    }
  }
}

export default CartItems;
