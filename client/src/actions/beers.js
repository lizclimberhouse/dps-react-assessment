import axios from 'axios';
export const BEERS = 'BEERS';

export const getBeers = (page) => {
  return (dispatch) => {
    axios.get(`/api/all_beers?page=${page}&per_page=5`)
      .then( res => dispatch({ type: BEERS, beers: res.data.entries }) )
  }
}