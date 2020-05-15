import React,  {useContext} from 'react';
import {CartContext} from './CartContext';



const Cart = () => {
    
    const [cart, setCart]= useContext(CartContext); 
    const totalPrice = cart.reduce((acc,curr)=>acc + curr.cost, 0); 
    const itemTitle=0;

    return (

    
      <div >
          <span> 
          
          
          </span> <br/> 
          <span> Items in cart: {cart.length} </span> <br></br>
          <span> Total Price: ${totalPrice} </span>  </div>

        
                
    )
    
};

export default Cart;