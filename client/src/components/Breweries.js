import React from 'react';
import { connect } from 'react-redux';
import { getBreweries } from '../actions/breweries';
import { Container, Divider, Header, Card, Icon, Image, Button } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const styles = {
  container: {
    height: '600px',
    overflowY: 'scroll',
    overflowX: 'hidden',
  }
}
class Breweries extends React.Component {
  state = { breweries: {}, page: 4, moreToLoad: true, loaded: false }

  componentDidMount() {
    // debugger
    let { page } = this.state;
    const { dispatch } = this.props;
    dispatch(getBreweries(page))
  }

//   componentDidUpdate(prevState, snapshot) {
//     if (prevState.page < this.state.page) {
//       this.setState({ page: this.state.page +1 }) }
//     else if (prevState.page < this.state.page) {
//       this.setState({ page: this.state.page -1 }) }
// }

  prevPage = (page) => {
    const { dispatch } = this.props;
    debugger
    dispatch(getBreweries(page - 1))
  }

  nextPage = (page) => {
    const { dispatch } = this.props;
    debugger
    dispatch(getBreweries(page + 1))
  }

  render() {
    // debugger

    const { breweries } = this.props;
    const { page, moreToLoad } = this.state;
    // debugger

    return (
      <Container>
        <Header>Breweries</Header>
        <Divider />
        <Container style={styles.container}>
          {/* <InfiniteScroll
            pageStart={page}
            loadMore={this.moreBreweries}
            hasMore={moreToLoad}
            loader={<div className="loader" key={0}>Loading...</div>}
            useWindow={false}
          > */}
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
          {/* </InfiniteScroll> */}

          <Button onClick={() => this.prevPage(page)}>Previous Page</Button>
          <Button onClick={() => this.nextPage(page)}>Next Page</Button>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(Breweries);