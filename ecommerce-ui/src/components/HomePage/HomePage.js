import React from 'react';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rental from '../Rental/Rental';
import Cart from '../Cart/Cart';
import scene from './somewhereInProvence.jpeg';
import airBnBs from './airbnbs.json';
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const headerStyle = {
  height: '425px',
  backgroundImage: `url(${scene})`,
  fontSize: '100px',
  fontFamily: 'Lucida Console',
  fontStyle: 'oblique',
  textAlign: 'left',
  verticalAlign: 'top',
  color: 'white',
}

const rentalData = airBnBs;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems : [],
      cartLabel : 'Cart is empty',
      showCart : false
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  addItem = (e) => {
    const rentalObj = JSON.parse(e.target.value);
    this.setState({
      cartItems: [ ...this.state.cartItems, {
        'title': rentalObj.houseType + ' in ' + rentalObj.location.city,
        'cost': rentalObj.payment.cost,
        'host': rentalObj.host.name
      }],
    });
    if(this.state.cartLabel === 'Cart is empty'){
      this.setState({cartLabel: 'Show Cart'});
    }
  }

  removeItem = (e) => {
    const rentalObj = JSON.parse(e.target.value);
    const updatedObj = [];
    this.state.cartItems.forEach(item => {
      if(item.host !== rentalObj.host){
        updatedObj.push(item);
      }
    })
    this.setState(
    {cartItems: updatedObj
    });
    if(this.state.cartItems.length === 0){
      this.setState({showCart: false, cartLabel: 'Cart is empty'});
    }
  }

  toggleVisibility = () => {
    if(this.state.cartItems.length > 0) {
      if(this.state.showCart)  {
        this.setState({showCart: false, cartLabel: 'Show Cart'})
      } else {
        this.setState({showCart: true, cartLabel: 'Hide Cart'})
      }
    } else {
      this.setState({showCart: false, cartLabel: 'Cart is empty'})
    }
  }

  render() {
    return (
      <Container fluid="md">
        <Row style={headerStyle}>
          <p>&nbsp;&nbsp;&nbsp;a place to stay...</p>
        </Row>
        <Row style={{paddingTop: '20px'}}>
          <Col className="container" sm={9}>
            <Rental data={rentalData} addItem={this.addItem} cartItems={this.state.cartItems}/>
          </Col>
          <Col className="container" sm={3}>
            <Button style={{marginBottom: '20px'}} onClick={this.toggleVisibility}>{this.state.cartLabel}</Button>
              { this.state.showCart ?
              <Cart  items={this.state.cartItems} removeItem={this.removeItem}/>
             : null }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HomePage;

HomePage.propTypes = {
  airBnBs: PropTypes.arrayOf(
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
  })),
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      host: PropTypes.string.isRequired
    })
  )
}
