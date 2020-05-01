import {bool, number, string, shape} from 'prop-types';

//lc: Did some research on how to define a prop type so that it can be referenced in multiple components.
const vacationRentalProductType = shape({
  title: string.isRequired,
  houseType: string.isRequired,
  image: string.isRequired,
  location: shape({
    city: string.isRequired,
    country: string.isRequired,
  }).isRequired,
  payment: shape({
    cost: number.isRequired,
    description: string.isRequired,
  }).isRequired,
  host: shape({
    name: string.isRequired,
    isSuperhost: bool, //optional
  }).isRequired,
  rating: shape({
    stars: number.isRequired,
    reviews: number.isRequired,
  }).isRequired
});

export default vacationRentalProductType;