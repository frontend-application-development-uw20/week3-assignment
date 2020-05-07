import React from 'react';
import AirbnbCard from './AirbnbCard'



export default class AirbnbList extends React.Component {

    
    


    render() {
        const {airbnb_details} = this.props;
        return (
          
                    <div className = "home">
                        {airbnb_details.map((card, idx)=> 
                
                        <AirbnbCard card={card} id={"airbnb-card-"+idx} key={idx} onClick={this.props.onClick}/> 
                
                        )}
                    </div>

                    
  
               
        ) ;
    }

}

