import React from 'react';
import Airbnbs from './airbnbs.json';

class Manhattan extends React.Component {
    
    render() {

        const { addToCart } = this.props;

        return(
                <div class="container">
                    <div class="child">
                    <h1>{Airbnbs[0].title} <button onClick={addToCart}>Add to cart</button></h1>
                    <img src={Airbnbs[0].image} />
                    </div>
                    <div class="child">
                    <p>Type: {Airbnbs[0].houseType}</p>
                    <p>Location: {Airbnbs[0].location.city}, {Airbnbs[0].location.country}</p>
                    </div>
                    <div class="payment child">
                    <p>Cost: ${Airbnbs[0].payment.cost}</p>
                    {Airbnbs[0].payment.description ? <p>Free cancellation</p> : null}
                    </div>
                    <div class="host child">
                    <p>Name: {Airbnbs[0].host.name}</p>
                    {Airbnbs[0].host.isSuperhost ? <p class="host">Is a Superhost: Yes</p> : null}
                    </div>
                    <div class="rating child">
                    <p>Stars: {Airbnbs[0].rating.stars}</p>
                    <p>Reviews: {Airbnbs[0].rating.reviews}</p>
                    </div>
                </div>
        )
    }
}


export default Manhattan;