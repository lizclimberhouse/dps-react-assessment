import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Container, Divider, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
          { beers.map( beer => 
            <Link key={beer.id} to={`/api/beer/${beer.name}`}>{beer.name}<br /></Link>
            )
          }


      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(Beers);