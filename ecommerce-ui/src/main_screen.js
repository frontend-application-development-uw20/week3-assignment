import React from 'react';
import PropTypes from 'prop-types';
import airbnb_details from './airbnbs.json';
import Airbnb_details from './Airbnb_Details';





class Main_screen extends React.Component {
    static propTypes = {
        airbnb_details: PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location:PropTypes.arrayOf(
                PropTypes.shape({
                    city: PropTypes.string.isRequired,
                    country: PropTypes.string.isRequired,
                })),
            payment:PropTypes.arrayOf(
                    PropTypes.shape({
                        cost: PropTypes.number.isRequired,
                        description: PropTypes.string.isRequired,
                })),
            host:PropTypes.arrayOf(
                        PropTypes.shape({
                            name: PropTypes.number.isRequired,
                            isSuperhost: PropTypes.bool.isRequired,
                })),
            rating:PropTypes.arrayOf(
                        PropTypes.shape({
                                stars: PropTypes.number.isRequired,
                                reviews: PropTypes.number.isRequired,
                 })),
        })),


    }

    constructor(props){
        super(props);
        this.state={
            airbnb_details: airbnb_details
        }
       
    }


    renderAirbnb_details(){
        return <Airbnb_details airbnb_details={this.state.airbnb_details} />
    }

    render(){
        return(
            <div>
                {this.renderAirbnb_details()}
            </div>
            
        );
    }

    
    
}

export default Main_screen;
