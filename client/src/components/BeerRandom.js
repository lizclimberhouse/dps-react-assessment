import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Divider, Card, Image } from 'semantic-ui-react';

const styles = {
  image: {
    marginLRight: '30px',
    marginBottom: '15px',
  },
}
class BeerRandom extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    axios.get('/api/random_beer')
      .then( res => {
        this.setState({ beer: res.data })
      })
  }

  showAbv = (beer) => {
    return ( beer.abv ? 
      <h5>ABV: {beer.abv}</h5>
      :
      <h5>ABV: unavailable</h5>
    )
  }

  showStyle = (beer) => {
    return ( beer.style ?
      <p>{beer.style.category.name}</p>
      :
      <div></div>
    )
  }

  render() {
    const { beer } = this.state;
    return (
      <Card key={1}>
        <Card.Content>
          <Card.Description>
            <h4>What's on Tap:</h4>
            <Divider />
          </Card.Description>
          <Image style={styles.image} src={"https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&h=350"} />
          <Divider />
          <Card.Header>
            {beer.name}
          </Card.Header>
          <Card.Meta>
            { this.showStyle(beer) }
          </Card.Meta>
          <Card.Description>
          <p>{beer.description}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        { this.showAbv(beer) }
        </Card.Content>
      </Card> 
    )
  }
}

export default connect()(BeerRandom);