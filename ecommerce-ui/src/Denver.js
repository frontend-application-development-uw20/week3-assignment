import React from 'react';
import Airbnbs from './airbnbs.json';

class Denver extends React.Component {

    render() {

        const { addToCart } = this.props;

        return(
                <div class="container">
                    <div class="child">
                    <h1>{Airbnbs[1].title} <button onClick={addToCart}>Add to cart</button></h1>
                    <img src={Airbnbs[1].image} />
                    </div>
                    <div class="child">
                    <p>Type: {Airbnbs[1].houseType}</p>
                    <p>Location: {Airbnbs[1].location.city}, {Airbnbs[1].location.country}</p>
                    </div>
                    <div class="payment child">
                    <p>Cost: ${Airbnbs[1].payment.cost}</p>
                    {Airbnbs[1].payment.description ? <p>Free cancellation</p> : null}
                    </div>
                    <div class="host child">
                    <p>Name: {Airbnbs[1].host.name}</p>
                    {Airbnbs[1].host.isSuperhost ? <p class="host">Is a Superhost: Yes</p> : null}
                    </div>
                    <div class="rating child">
                    <p>Stars: {Airbnbs[1].rating.stars}</p>
                    <p>Reviews: {Airbnbs[1].rating.reviews}</p>
                    </div>
                </div>
        )
    }
}

export default Denver;