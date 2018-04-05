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
//TODO how to figure out the total_pages in the_wizard
export default breweries;