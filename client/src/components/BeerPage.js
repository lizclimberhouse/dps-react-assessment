import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Container, Divider, Image, Grid } from 'semantic-ui-react';
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
  title: {
    textAlign: 'center',
  },
  image: {
    marginLRight: '30px',
    marginBottom: '15px',
  },
}

class BeerPage extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    const { beers, page } = this.props;
    const { dispatch } = this.props;
    dispatch(getBeers(page))
    this.setState({beer: beers.find( b => b.id === this.props.match.params.id  ) })
  }

  showImage = (id) => {
    return ( id ?
      <Image style={styles.image} src={images[`i${id}`]} />
      :
      <Image style={styles.image} src={images[`i${13}`]} />
    )
  }

  showDesc = (beer) => {
    return ( beer.description ? 
      <h5>{beer.description}</h5>
      :
      <div></div>
    )
  }

  showAbv = (beer) => {
    return ( beer.abv ? 
      <h5>ABV: {beer.abv}</h5>
      :
      <h5>ABV: unavailable</h5>
    )
  }

  showIbu = (beer) => {
    return ( beer.ibu ? 
      <h5>International Bitterness Units(IBR): {beer.ibu}</h5>
      :
      <div></div>
    )
  }

  showSrb = (beer) => {
    return ( beer.srb ? 
      <h5>Standard Reference Method(SRM): {beer.srb}</h5>
      :
      <div></div>
    )
  }

  showStyle = (beer) => {
    return ( beer.style ?
      <h2>Style: {beer.style.category.name}</h2>
      :
      <div></div>
    )
  }

  render() {
    const { beer = {} } = this.state;
    return (
      <Container>
        <Divider hidden />
        <h1 style={styles.title}>{beer.name}</h1>
        <Divider />
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={12}>
            { this.showStyle(beer) }
            { this.showAbv(beer) }
            { this.showIbu(beer) }
            { this.showSrb(beer) }
            { this.showDesc(beer) }
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={4}>
            { this.showImage(Math.floor(beer.abv)) }
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(BeerPage);