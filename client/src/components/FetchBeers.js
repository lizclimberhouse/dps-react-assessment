//TODO this needs to be done so we can see a single game or all the games correct?
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Beers from './Beers';
import BeerPage from './BeerPage';
import { getBeers } from '../actions/beers';

class FetchBeers extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBeers())
  }

  render() {
    return (
      <div>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beer/:name" component={BeerPage} />
      </div>
    )
  }
}

export default connect()(FetchBeers);