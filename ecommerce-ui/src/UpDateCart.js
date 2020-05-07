import React from 'react';
import PropTypes from 'prop-types';

class UpDateCart extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  static propTypes = {
    infoArray: PropTypes.arrayOf(PropTypes.string),
    costArray: PropTypes.arrayOf(PropTypes.number)
  }

  handleClick(e) {
    this.props.onHandleRemoveFromCart(e.target.getAttribute("id"));
  }

  render () {

    return (
      this.props.infoArray.map((info, i) => {
        return(
          <ul key={i}>{info}${this.props.costArray[i]}{' '}
            <button id={i} onClick={this.handleClick}>delete</button>
          </ul>
        )
      })
   )
  }
}
export default UpDateCart;
