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

    index = this.props.propid;

    handleAddToCart = (props) => {
        this.setState({ count: this.state.count + 1, total: this.state.total + props });
    }


    handleEmptyCart = (props) => {
        this.setState({ count: this.state.count - 1, total: this.state.total - props })
    }
    

    render() {
        // console.log(this.state.total)
        // console.log(this.state.count)
        // console.log(this.total)
        // console.log(this.props.payment.cost)
        return (
            <div>
                <p>This Cart contains {this.state.count} items</p>
            </div>
        );
    }
}

export default ShoppingCart;