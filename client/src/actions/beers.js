import axios from 'axios';
export const BEERS = 'BEERS';

export const getBeers = () => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then( res => dispatch({ type: BEERS, beers: res.data.entries }) )
  }
}