import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

class VacationRental extends React.Component {
    static propTypes = {
        vacationObj: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired
            }),
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired
            }),
            host: PropTypes.shape({
                name: PropTypes.string.isRequired,
                isSuperHost: PropTypes.bool.isRequired
            }),
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired
            })
        })
    }



    render() {
        return (
            <div>
                <h3>{this.props.title} ({this.props.houseType})</h3>
                <p>Rated: {this.props.rating.stars} ({this.props.rating.reviews} reviews)</p>
                <p className={this.props.host.isSuperHost}><b>{this.props.host.name} is a Super Host!</b></p>
                <img className="propertyImage" alt="property pic" src={this.props.image} /><br></br><br></br><br></br>
            </div>
        );
    }
}

export default VacationRental;
