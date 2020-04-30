import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaUser } from 'react-icons/fa';
import { withGlobalState } from 'react-globally'



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
        this.setState({ count: 1 });
        this.props.setGlobalState({cart: (this.props.globalState.cart + props)})


    }

    handleEmptyCart = (props) => {
        this.setState({ count: 0 });
        this.props.setGlobalState({cart: (this.props.globalState.cart - props)})

    }

    

    render() {
        return (
            <div>
                <hr></hr><br></br><br></br>
                <img className="propertyImage" alt="property pic" src={this.props.image} />
                <h3>{this.props.title} ({this.props.houseType})</h3>
                <p><b><FaUser /> <u>{this.props.host.name}</u></b> <b className={this.props.host.isSuperhost === false ? 'hide-element' : 'show-element'}>(Super Host)</b></p>
                <p><b>{this.props.rating.stars}</b><FaStar />'s ({this.props.rating.reviews} reviews) ---- Cost: ${this.props.payment.cost} <button className={this.state.count === 1 ? "hide-element": "reserve"} onClick={() => this.handleAddToCart (this.props.payment.cost)}>Reserve</button>  <button className={this.state.count === 0 ? "hide-element" : "remove"} onClick={() => this.handleEmptyCart (this.props.payment.cost) }>Remove</button></p>
                <br></br>
            </div>
        );
    }
}

export default withGlobalState(VacationRental);
