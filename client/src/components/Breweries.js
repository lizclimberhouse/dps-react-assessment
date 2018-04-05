import React from 'react';
import { connect } from 'react-redux';
import { getBreweries } from '../actions/breweries';
import { Container, Divider, Header } from 'semantic-ui-react';
// import InfiniteScroll from 'react-infinite-scroller';
import ReactPaginate from 'react-paginate';

class Breweries extends React.Component {
  state = { page: 1, total_pages: '' }

  componentDidMount() {
    this.loadBreweries()
  }

  loadBreweries = () => {
    // const { page } = this.state;
    const { dispatch } = this.props;
    dispatch(getBreweries())
    const total_pages = (50/8)
  }

  render() {
    const { breweries } = this.props;
    const { page, total_pages } = this.state;
    return (
      <Container>
        <Header>Breweries</Header>
        <Divider />
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={this.loadBreweries}
          hasMore={page < total_pages}
          loader={<div className="loader" key={0}>Loading...</div>}
          useWindow={false}
        > */}
        {/* <Card.Group itemsPerRow={4}> */}
          { breweries.map( brewery => <p key={brewery.id}>{brewery.name}</p> ) }
        {/* </Card.Group> */}
        {/* </InfiniteScroll> */}

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries }
}

export default connect(mapStateToProps)(Breweries);