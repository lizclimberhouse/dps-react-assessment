import axios from 'axios';
export const BREWERIES = 'BREWERIES';

export const getBreweries = () => {
  return (dispatch) => {
    axios.get(`/api/all_breweries?page=20&per_page=8`)
      .then( res => dispatch({ type: BREWERIES, breweries: res.data.entries }) )
  }
}