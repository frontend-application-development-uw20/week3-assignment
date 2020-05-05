import React from 'react';
import Airbnbs from './airbnbs.json';

class Gamla extends React.Component {

    render() {

        const { addToCart } = this.props;

        return(
                <div class="container">
                    <div class="child">
                    <h1>{Airbnbs[2].title} <button onClick={addToCart}>Add to cart</button></h1>
                    <img src={Airbnbs[2].image} />
                    </div>
                    <div class="child">
                    <p>Type: {Airbnbs[2].houseType}</p>
                    <p>Location: {Airbnbs[2].location.city}, {Airbnbs[2].location.country}</p>
                    </div>
                    <div class="payment child">
                    <p>Cost: ${Airbnbs[2].payment.cost}</p>
                    {Airbnbs[2].payment.description ? <p>Free cancellation</p> : null}
                    </div>
                    <div class="host child">
                    <p>Name: {Airbnbs[2].host.name}</p>
                    {Airbnbs[2].host.isSuperhost ? <p class="host">Is a Superhost: Yes</p> : null}
                    </div>
                    <div class="rating child">
                    <p>Stars: {Airbnbs[2].rating.stars}</p>
                    <p>Reviews: {Airbnbs[2].rating.reviews}</p>
                    </div>
                </div>
        )
    }
}

export default Gamla;