import { combineReducers } from 'redux';
import flash from './flash';
import beers from './beers';
import breweries from './breweries';

const rootReducer = combineReducers({
  flash,
  beers,
  breweries,
})

export default rootReducer
