import React from 'react';
import PropTypes from 'prop-types';

class addToCart extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    addPropertyToCart: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    }
    this.handleAddPropertyToCart = this.handleAddPropertyToCart.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  handleAddPropertyToCart(e) {
    e.preventDefault();
    this.props.addPropertyToCart(this.props.id, this.state.qty);
  }

  handleChangeQuantity(e) {
    console.log(e.target.value)
    this.setState({ qty: Number(e.target.value) })
  }

  render() {
    return (
      <div>
        <b><label htmlFor={'qty'}>Days: </label></b>
        <input
          id={'qty'}
          type={'number'}
          defaultValue={this.state.qty}
          min={1}
          max={7}
          size={1}
          onChange={this.handleChangeQuantity}
        >
        </input>
        <button onClick={this.handleAddPropertyToCart}>Add to cart</button>
      </div>
    )
  }
}

export default addToCart;
