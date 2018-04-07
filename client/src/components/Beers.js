import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Button, Grid, Comment, Image, Icon, Card } from 'semantic-ui-react';
import i1 from '../images/1.png';
import i2 from '../images/2.png';
import i3 from '../images/3.png';
import i4 from '../images/4.png';
import i5 from '../images/5.png';
import i6 from '../images/6.png';
import i7 from '../images/7.png';
import i8 from '../images/8.png';
import i9 from '../images/9.png';
import i10 from '../images/10.png';
import i11 from '../images/11.png';
import i12 from '../images/12.png';
import i13 from '../images/13.png';

const images = { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13 }

const styles = {
  btn: {
    marginBottom: '30px',
    width: '150px',
  },
  font: {
    color: 'white',
  },
}

class Beers extends React.Component {
  state = { page: 1 }

  componentDidMount() {
    let { page } = this.state;
    const { dispatch } = this.props;
    dispatch(getBeers(page))
  }

  prevPage = () => {
    const { dispatch } = this.props;
    this.setState({ page: this.state.page - 1})
    dispatch(getBeers(this.state.page - 1)) // I'll admit that I couldn't figure out a normal way to do pagination, so I hacked it.
  }

  nextPage = () => {
    const { dispatch } = this.props;
    this.setState({ page: this.state.page + 1})
    dispatch(getBeers(this.state.page + 1))
  }

  prevButton = () => {
    const { page } = this.state;
    return ( page === 1 ?
      <Button disabled style={styles.btn} color='blue' onClick={() => this.prevPage()}>Previous Page</Button>
      :
      <Button style={styles.btn} color='blue' onClick={() => this.prevPage()}>Previous Page</Button>
    )
  }

  nextButton = () => {
    const { page } = this.state;
    return ( page === 11 ?
      <Button disabled style={styles.btn} color='green' onClick={() => this.nextPage()}>Next Page</Button>
      :
      <Button style={styles.btn} color='green' onClick={() => this.nextPage()}>Next Page</Button>
    )
  }

  showImage = (id) => {
    return ( id ?
      <Comment.Avatar as='a' src={images[`i${id}`]} />
      :
      <Comment.Avatar as='a' src={images[`i${13}`]} />
    )
  }

  //TODO maybe a "random beer of the day" in this Card?
  render() {
    const { beers } = this.props;
    const { page } = this.state;
    return (
      <Container>
        <Divider hidden />
        <h1>Beers</h1>
        <Divider />
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            <Card.Group>
              <Card key={1}>
                <Card.Content>
                <Image style={styles.image} src={i13} />
                  <Divider />
                  <Card.Header>
                    Hello, what shall we do with this little card?
                  </Card.Header>
                  <Card.Meta>
                    Chain Brewery
                  </Card.Meta>
                  <Card.Description>
                    Established: YEAR
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to={'/beers'}><Icon name='heart'/>beers</Link>
                </Card.Content>
              </Card> 
            </Card.Group>
          </Grid.Column>            
          <Grid.Column mobile={16} tablet={16} computer={12}>
            { this.prevButton() }
            { this.nextButton() }
            <Comment.Group>
              { beers.map( beer => 
              <Comment key={beer.id}>
              <Divider />
                { this.showImage(Math.floor(beer.abv)) }
                  <Comment.Content>
                  <Comment.Author style={styles.font}>{beer.name}</Comment.Author>
                  <Comment.Text>
                    <p style={styles.font}>{beer.style.category.name}</p>
                  </Comment.Text>
                  <Comment.Action>
                    <Link to={`/beer/${beer.id}`}><Icon name='eye'/>More Info</Link>
                  </Comment.Action>
                </Comment.Content>
              </Comment>
              )
            }
          </Comment.Group>
        </Grid.Column>
      </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(Beers);