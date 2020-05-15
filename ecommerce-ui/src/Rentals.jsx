import React from 'react';
import RentalCard from './RentalCard'; 
import {Grid} from "@material-ui/core";
import airbnbs from './_data/airbnbs.json';
import {CartContext} from './CartContext';

const Rentals = () => {



    return (
        <Grid container spacing={4}>
             { airbnbs.map((airbnbs,idx) => 
             
                 <Grid item xs ={12} sm={4} alignItems="center">
                 <RentalCard title={airbnbs.title} 
                 houseType={airbnbs.houseType} 
                 imgSrc={airbnbs.image} 
                 city={airbnbs.location.city} 
                 country={airbnbs.location.country} 
                 cost={airbnbs.payment.cost} 
                 description={airbnbs.payment.description} 
                 hostName={airbnbs.host.name} 
                 isSuperhost={airbnbs.host.isSuperhost} 
                 stars={airbnbs.rating.stars} 
                 reviews={airbnbs.rating.reviews} />
                 </Grid>
               
             )}
        </Grid>
    );
    
};

export default Rentals; 
