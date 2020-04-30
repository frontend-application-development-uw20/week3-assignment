import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';



class VacationRental extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0, total: 0 }
      }

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

    handleAddToCart = (props) => {
        this.setState({ count: this.state.count + 1, total: this.state.total + props });
    }

    handleEmptyCart = (props) => {
        this.setState({ count: this.state.count - 1, total: this.state.total - props })
    }

    // showCart = () => {
    //     return this.state.count
    // }
    

    render() {
        console.log(this.state.total)
        return (
            <div>
                <h3>{this.props.title} ({this.props.houseType})</h3>
                <p><b>{this.props.rating.stars}</b><FaStar />'s ({this.props.rating.reviews} reviews) ---- Cost: ${this.props.payment.cost}</p>
                <p className={this.props.host.isSuperhost === false ? 'hide-element' : 'show-element'}><b><u>{this.props.host.name}</u></b> is a Super Host!</p>
                <p> <button className={this.state.count === 1 ? "hide-element": ""} onClick={() => this.handleAddToCart (this.props.payment.cost) }>Reserve</button>  <button className={this.state.count === 0 ? "hide-element": ""} onClick={() => this.handleEmptyCart (this.props.payment.cost) }>Remove</button></p>
                <img className="propertyImage" alt="property pic" src={this.props.image} />
                <br></br><br></br><br></br>
            </div>
        );
    }
}

export default VacationRental;
