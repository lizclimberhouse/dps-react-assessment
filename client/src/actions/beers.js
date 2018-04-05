import axios from 'axios';
export const BEERS = 'BEERS';

export const getBeers = () => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then( res => dispatch({ type: BEERS, beers: res.data.entries }) )
  }
}

export const getOneBeer = (name) => {
  return (dispatch) => {
    axios.get('/api/beer/by_name')
      .then( res => dispatch({ type: ONE_BEER, beer: res.data }) )
  }
}