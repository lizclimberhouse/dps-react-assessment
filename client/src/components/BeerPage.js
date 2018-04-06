import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';

class BeerPage extends React.Component {

  state = { beer: {} }

  componentDidMount() {
    const { beers } = this.props;
    const { dispatch } = this.props;
    dispatch(getBeers())
    this.setState({beer: beers.find( b => b.id === this.props.match.params.id  ) })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.beers.length !== this.props.beers.length)
      this.setState({beer: this.props.beers.find( b => b.id === this.props.match.params.id  ) })
  }

  render() {
    const { beer = {} } = this.state;
    return (
      <div>BeerPage - {beer.name}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(BeerPage);