import {
  BREWERIES,
} from '../actions/breweries';

const breweries = ( state = [], action ) => {
  switch (action.type) {
    case BREWERIES:
      return action.breweries
    default:
      return state
  }
}

export default breweries;