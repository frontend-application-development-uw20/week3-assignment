import React from 'react';
import Airbnb_card from './Airbnb_Card'



export default class Airbnb_details extends React.Component {


    render() {
        const {airbnb_details} = this.props;
        return (
            
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
                <hr></hr >
                <div>
                    <i className="material-icons">house</i>
                    <h2 className= "heading">@Home Rentals</h2>
                </div>
                <hr />
                    <div className = "home">
                        {airbnb_details.map((card, idx)=> 
                
                        <Airbnb_card card={card} id={"airbnb-card-"+idx} key={idx} /> 
                
                        )}
                </div>
                    
             </div>
               
        ) ;

    }

}

