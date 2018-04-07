import axios from 'axios';
export const BEERS = 'BEERS';
export const ONE_BEER = 'ONE_BEER';

export const getBeers = (page) => {
  return (dispatch) => {
    axios.get(`/api/all_beers?page=${page}&per_page=5`)
      .then( res => dispatch({ type: BEERS, beers: res.data.entries }) )
  }
}

// export const getOneBeer = (name) => {
//   return (dispatch) => {
//     axios.get('/api/beer/by_name')
//       .then( res => dispatch({ type: ONE_BEER, beer: res.data }) )
//   }
// }