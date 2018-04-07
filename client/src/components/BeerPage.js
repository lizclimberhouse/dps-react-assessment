import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import { Container, Divider, Image } from 'semantic-ui-react';
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
  center: {
    textAlign: 'center',
  },
  right: {
    float: 'right',
    marginRight: '30px',
    marginBottom: '15px',
  },
}

class BeerPage extends React.Component {
  // TODO need to find a way to save page to state.

  state = { beer: {} }

  componentDidMount() {
    const { beers, page } = this.props;
    const { dispatch } = this.props;
    dispatch(getBeers(page))
    this.setState({beer: beers.find( b => b.id === this.props.match.params.id  ) })
  }

  // TODO get rid of this if I can't make it work.
  // componentDidUpdate(prevProps) {
  //   if (prevProps.beers.length !== this.props.beers.length)
  //     this.setState({beer: this.props.beers.find( b => b.id === this.props.match.params.id  ) })
  // }

  showImage = (id) => {
    return ( id ?
      <Image style={styles.right} src={images[`i${id}`]} />
      :
      <Image style={styles.right} src={images[`i${13}`]} />
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
        <h1 style={styles.center}>{beer.name}</h1>
        <Divider />
        { this.showStyle(beer) }
        { this.showImage(Math.floor(beer.abv)) }
        { this.showAbv(beer) }
        { this.showIbu(beer) }
        { this.showSrb(beer) }
        { this.showDesc(beer) }
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(BeerPage);