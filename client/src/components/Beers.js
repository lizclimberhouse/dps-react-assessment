import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Link } from 'react-router-dom';
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
          { beers.map( beer => 
            <Link key={beer.id} to={`/beer/${beer.id}`}>{beer.name}<br /></Link>
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