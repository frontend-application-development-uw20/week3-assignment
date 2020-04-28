import React from 'react';
import Airbnb_card from './Airbnb_Card'



export default class Airbnb_list extends React.Component {

    
    


    render() {
        const {airbnb_details} = this.props;
        return (
          
                    <div className = "home">
                        {airbnb_details.map((card, idx)=> 
                
                        <Airbnb_card card={card} id={"airbnb-card-"+idx} key={idx} onClick={this.props.onClick}/> 
                
                        )}
                    </div>

                    
  
               
        ) ;
    }

}

