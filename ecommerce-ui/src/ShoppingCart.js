import React from 'react'
import { withGlobalState } from 'react-globally'
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCart = (props) => {
    return (
    <div>
      <b className={props.globalState.cart === 0 ? "hide-element": ""}><FaShoppingCart /> ${props.globalState.cart}</b>
    </div>
  )
}

export default withGlobalState(ShoppingCart)