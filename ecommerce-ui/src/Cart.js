import React from 'react';
import Airbnb_card from './Airbnb_Card'





export default class Cart extends React.Component {



    render() {
        const {cartList} = this.props;
        
        
        
        return (
            <div>
                <h2>Shopping Cart</h2>
                {cartList.length===0 ? "Cart is empty" : <div> There are {cartList.length} rental selected</div>}
                {cartList.length> 0&&
                    <div>
                        <ul>
                            {cartList.map((item) =>
                            <li>
                                <b>{item.title} - ${item.cost}</b> 
                                <button className= "RemoveCart" onClick={(e) =>this.props.handleRemoveFromCart(e,item)}>
                                    
                                    x</button>
                            </li>
                            
                            )}
                        </ul>
                        Total :${cartList.reduce((a,c)=> parseFloat(a) + parseFloat(c.cost), 0)} 

                    </div>
                
                }
              
            </div>
            
          
                    
                    
  
               
        ) ;
    }

}



