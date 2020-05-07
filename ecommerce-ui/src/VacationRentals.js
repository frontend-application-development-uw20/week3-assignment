import React from 'react';
import GetPropertyData from './GetPropertyData';
import propertyData from './data/airbnbs.json';
import UpDateCart from './UpDateCart.js';


class VacationRentals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         infoArray: [],
         costArray: [],
         totalCost: 0
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleAddToCart(info, cost) {
      if (!this.state.infoArray.includes(info)) {
        this.setState({
          infoArray: [...this.state.infoArray, info],
          costArray: [...this.state.costArray, cost],
          totalCost: this.state.totalCost + parseInt(cost)
        })
    } else {
        alert('Property already in cart.');
    }
  }

  handleRemoveFromCart(index) {
    const cost = this.state.costArray[index];
    this.state.infoArray.splice(index, 1);
    this.state.costArray.splice(index, 1);
    this.setState({
      totalCost: this.state.totalCost - cost,
      infoArray: this.state.infoArray,
      costArray: this.state.costArray
    })

  }

  render () {
    return (
      <>
        < GetPropertyData
            propertyData={propertyData}
            handleAddToCart={this.handleAddToCart}
        />
        <div id="cart" className="cart">Cart
          < UpDateCart
              infoArray={this.state.infoArray}
              costArray={this.state.costArray}
              onHandleRemoveFromCart={this.handleRemoveFromCart}
          />
          <ul>Total:  ${this.state.totalCost}</ul>
        </div>
      </>
      );
  }
}
export default VacationRentals;
