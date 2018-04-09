import {
  BEERS,
} from '../actions/beers';

const beers = ( state = [], action ) => {
  switch (action.type) {
    case BEERS:
      return action.beers
    default:
      return state
  }
}

export default beers;