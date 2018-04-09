import axios from 'axios';
export const BREWERIES = 'BREWERIES';
export const LOAD_MORE = 'LOAD_MORE';

export const getBreweries = (page) => {
  return (dispatch) => {
    axios.get(`/api/all_breweries?page=${page}&per_page=8`)
      .then( res => 
        dispatch({ type: BREWERIES, breweries: res.data.entries }) 
      )
  }
}