import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import PropTypes from 'prop-types';
import '../App.scss';

class Rating extends React.Component {
    static propTypes = {
        rating: PropTypes.shape({
            stars: PropTypes.number,
            reviews: PropTypes.number
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const { stars, reviews } = this.props.rating;
        let propsArray = []
        for (let i = 1; i <= parseInt(stars); i++) {
            propsArray.push("full");
        }
        
        return(
            <div className="rating">
                {propsArray.map((star, i) => {
                    if (star === "full") {
                        return <FontAwesomeIcon key={i} icon={faStar} />
                    }
                    return;
                })}
                {` ${stars} (${reviews})`}
            </div>
        )
    }
}

export default Rating;