import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {

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

    // state = { count: 0, total: 0 }
    // total = 0

    handleAddToCart = () => {
        this.setState({ count: this.state.count + 1, total: this.state.total + this.props.payment.cost });
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ total: this.state.total + this.props.payment.cost })
    }


    handleEmptyCart = () => {
        this.setState({ count: this.state.count - 1 })
        this.setState({ total: this.state.total - this.props.payment.cost })
    }
    

    render() {
        console.log(this.state.total)
        console.log(this.state.count)
        console.log(this.total)
        // console.log(this.props.payment.cost)
        return (
            <div>
                <p> <button onClick={this.handleAddToCart}>Reserve</button> {this.state.count === 0 ? "cart is empty" : ""} <button className={this.state.count === 0 ? "hide-element": ""} onClick={this.handleEmptyCart}>Remove</button></p>
            </div>
        );
    }
}

export default ShoppingCart;