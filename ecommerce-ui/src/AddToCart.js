import React from 'react';
import PropTypes from 'prop-types';

class AddToCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    info: PropTypes.string,
    cost: PropTypes.number
  }

  handleClick() {
    this.props.onHandleAddToCart(this.props.info, this.props.cost);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Add to Cart
      </button>
    );
  }
}
export default AddToCart;
