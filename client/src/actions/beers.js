import axios from 'axios';
export const BEERS = 'BEERS';
// export const BEER = 'BEER';
// export const ONE_BEER = 'ONE_BEER';

export const getBeers = (page) => {
  return (dispatch) => {
    axios.get(`/api/all_beers?page=${page}&per_page=5`)
      .then( res => dispatch({ type: BEERS, beers: res.data.entries }) )
  }
}

// export const getBeerRandom = () => {
//   return (dispatch) => {
//     axios.get('/api/random_beer')
//       .then( res => dispatch({ type: BEER, beer: res.data }) )
//   }
// }

// Couldn't get the api for a single beer to work, talked to Dave about this.
// export const getOneBeer = (name) => {
//   return (dispatch) => {
//     axios.get(`/api/beer/${name}`)
//       .then( res => dispatch({ type: ONE_BEER, beer: res.data.entries[0] }) )
//   }
// }