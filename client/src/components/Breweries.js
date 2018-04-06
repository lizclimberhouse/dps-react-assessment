import React from 'react';
import { connect } from 'react-redux';
import { getBreweries } from '../actions/breweries';
import { Container, Divider, Header, Card, Icon, Image, Button } from 'semantic-ui-react';
// import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
// import axios from 'axios';

const styles = {
  container: {
    height: '600px',
  }
}
class Breweries extends React.Component {
  state = { breweries: {}, page: 2, moreToLoad: true, loaded: false }

  componentDidMount() {
    let { page } = this.state;
    const { dispatch } = this.props;
    dispatch(getBreweries(page))
  }

  prevPage = () => {
    const { dispatch } = this.props;
    this.setState({ page: this.state.page - 1})
    const { page } = this.state;
    dispatch(getBreweries(page))
  }

  nextPage = () => {
    const { dispatch } = this.props;
    this.setState({ page: this.state.page + 1})
    const { page } = this.state;
    dispatch(getBreweries(page))
  }

  render() {
    const { breweries } = this.props;
    const { page, moreToLoad } = this.state;
    return (
      <Container>
        <Header>Breweries</Header>
        <Divider />
        <Container style={styles.container}>
          <Card.Group itemsPerRow={4}>
            { breweries.map( brewery => 
            <Card key={brewery.id}>
              <Card.Content>
                <Divider />
                <Card.Header>
                  {brewery.name}
                </Card.Header>
                <Card.Meta>
                  {brewery.name} | {brewery.name}
                </Card.Meta>
                <Card.Description>
                  {brewery.name}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to={`/brewery/${brewery.id}`}><Icon name='eye'/>{brewery.name}</Link>
              </Card.Content>
            </Card> 
            ) 
          }
          </Card.Group>

          <Button onClick={() => this.prevPage()}>Previous Page</Button>
          <Button onClick={() => this.nextPage()}>Next Page</Button>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(Breweries);