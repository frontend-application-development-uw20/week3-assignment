import React from 'react'
import { withGlobalState } from 'react-globally'

const ShoppingCart = (props) => {
  return (
    <div>
      <b className={props.globalState.cart === 0 ? "hide-element": ""}>Cart Total: ${props.globalState.cart}</b>
    </div>
  )
}

export default withGlobalState(ShoppingCart)