import React from 'react';
import airbnbs from './airbnbs';
import ShopItems from './shopitems'
import CartItems from './cartitems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faPassport, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopitems: airbnbs,
      cartitems: [],
      total:0,
      displayCart: true
    }
  }

  addItemToCart = (e) => {
    e.preventDefault();
    const shopTargetBlockID = e.target.parentNode.parentNode.id;
    const shopTargetCleanID = shopTargetBlockID.replace(/\D+/g, '');

    this.setState(state => {
      const cartitems = [...state.cartitems, airbnbs[shopTargetCleanID]];
      return {
        cartitems
      };
    });
  }

  removeItemFromCart = (index) => {
    return (e) => {
      const newCartitems = this.state.cartitems.filter((item, j) => index !== j);
      this.setState({ cartitems: newCartitems });
    }
  }

  displayCartHandler = (e) => {
    e.preventDefault();
    if (this.state.displayCart === true) {
      this.setState({displayCart: false})
    } else {
      this.setState({displayCart: true})
    }
  }

  render() {

    return (
      console.log(this.state.shopitems),
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button variant="contained" onClick={this.displayCartHandler}>Show/Hide Shopping Cart</Button>
          </Toolbar>
        </AppBar>
        <h1><FontAwesomeIcon icon={faRoute}/> Find your next dream vacation! <FontAwesomeIcon icon={faPassport}/></h1>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <ShopItems
              shopitems={this.state.shopitems}
              additems={this.addItemToCart}
            />
          </Grid>
          <Grid item xs={2} style={{display: this.state.displayCart ? 'block' : 'none'}}>
            <div><FontAwesomeIcon icon={faShoppingCart}/> Shopping Cart:</div>
            <CartItems
              cartitems={this.state.cartitems}
              removeitems={this.removeItemFromCart}
              total={this.state.total}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Shop;

