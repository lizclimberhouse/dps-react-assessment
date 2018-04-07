import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBreweries } from '../actions/breweries';

class BreweryPage extends React.Component {

  state = { brewery: {} }

  componentDidMount() {
    const { breweries } = this.props;
    const { dispatch } = this.props;
    dispatch(getBreweries())
    this.setState({brewery: breweries.find( b => b.id === this.props.match.params.id  ) })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.breweries.length !== this.props.breweries.length)
      this.setState({brewery: this.props.breweries.find( b => b.id === this.props.match.params.id  ) })
  }

  render() {
    const { brewery = {} } = this.state;
    return (
      <div>BreweryPage - {brewery.name}</div>
      //brewery.website
      //brewery.description
      //brewery.established
      //brewery.brand_classification
      //brewery.is_mass_owned
    )
  }
}
const mapStateToProps = (state) => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(BreweryPage);