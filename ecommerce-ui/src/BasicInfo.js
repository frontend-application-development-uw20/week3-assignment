import React from 'react';
import Airbnbs from './airbnbs.json';
import './BasicInfo.css';
import MainPage from './MainPage.js';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    generalInfo = (props) => (
        <>                     
            <div class="child">
            <h1>{props.title} </h1>
                <img src={props.image} />
            </div>
            <div class="child">
                <p>Type: {props.houseType}</p>
                <p>Location: {props.location.city}, {props.location.country}</p>
            </div>
        </>
    );

    payment = (props) => (
        <>
            <div class="payment child">
                <p>Cost: ${props.payment.cost}</p>
                {props.payment.description ? <p>Free cancellation</p> : null}
            </div>
        </>
    );

    host = (props) => (
        <>
            <div class="host child">
                <p>Name: {props.host.name}</p>
                {props.host.isSuperhost ? <p class="host">Is a Superhost: Yes</p> : null}
            </div>
        </>
    );

    rating = (props) => (
        <>
            <div class="rating child">
                <p>Stars: {props.rating.stars}</p>
                <p>Reviews: {props.rating.reviews}</p>
            </div>
        </>
    );
    

    render() {
        const { listing, addToCart } = this.props;

        return(
            <div>
            {Airbnbs.map(listing => 
                <div>
                    <button onClick={addToCart}>Add to cart</button>
                    <generalInfo listing={listing}/>
                    <payment listing={listing}/>
                    <host listing={listing}/>
                    <rating listing={listing}/>
                </div>
            )}
            </div>
                // <div class="container">
                //     <div class="child">
                //     <h1>{listing.title} <button onClick={addToCart}>Add to cart</button></h1>
                //     <img src={listing.image} />
                //     </div>
                //     <div class="child">
                //     <p>Type: {listing.houseType}</p>
                //     <p>Location: {listing.location.city}, {listing.location.country}</p>
                //     </div>
                //     <div class="payment child">
                //     <p>Cost: ${listing.payment.cost}</p>
                //     {listing.payment.description ? <p>Free cancellation</p> : null}
                //     </div>
                //     <div class="host child">
                //     <p>Name: {listing.host.name}</p>
                //     {listing.host.isSuperhost ? <p class="host">Is a Superhost: Yes</p> : null}
                //     </div>
                //     <div class="rating child">
                //     <p>Stars: {listing.rating.stars}</p>
                //     <p>Reviews: {listing.rating.reviews}</p>
                //     </div>
                // </div>
            // )}
            // </div>
        )

        


    }

}

export default BasicInfo;