import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Container, Divider, Header } from 'semantic-ui-react';

class Beers extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getBeers())
    
  }

  render() {
    const { beers } = this.props;
    return (
      <Container>
        <Header>Beers</Header>
        <Divider />
          { beers.map( beer => <p key={beer.id}>{beer.name}</p> ) }


      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(Beers);