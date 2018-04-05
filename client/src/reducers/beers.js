import {
  BEERS,
  ONE_BEER,
} from '../actions/beers';

const beers = ( state = [], action ) => {
  switch (action.type) {
    case BEERS:
      return action.beers
    case ONE_BEER:
      return action.beer
    default:
      return state
  }
}

export default beers;