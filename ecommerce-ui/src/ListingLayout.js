import React from 'react';

class ListingLayout extends React.Component {
    
    render() {

        const { addToCart, airbnb } = this.props;

        return(
                <div>
                    <h1>{airbnb.title}</h1>
                    <div class="center">
                        <button class="addbutton" onClick={addToCart}>Add to cart</button>
                    </div>
                    <hr></hr>
                    <img src={airbnb.image} />
                    <p>Type: {airbnb.houseType}</p>
                    <p>Location: {airbnb.location.city}, {airbnb.location.country}</p>
                    <p>Cost: ${airbnb.payment.cost}</p>
                    {airbnb.payment.description ? <p>Free cancellation</p> : null}
                    <p>Name: {airbnb.host.name}</p>
                    {airbnb.host.isSuperhost ? <p class="host">Is a Superhost: Yes</p> : null}
                    <p>Stars: {airbnb.rating.stars}</p>
                    <p>Reviews: {airbnb.rating.reviews}</p>
                </div>
        )
    }
}


export default ListingLayout;