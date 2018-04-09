import React from 'react';
import axios from 'axios';
import { Divider, Card, Image, Container } from 'semantic-ui-react';
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
import i14 from '../images/14.png';

const images = { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14 }

const styles = {
  image: {
    height: '200px',
    margin: '0 0 0 20%',
  },
}

class Glassware extends React.Component {
  state = { glassware: [] }

  componentDidMount() {
    axios.get('/api/all_glassware')
      .then( res => {
        this.setState({ glassware: res.data.entries })
      })
  }

  render() {
    const { glassware } = this.state;
    return (
      <Container>
        <Divider hidden />
        <h1>Glassware</h1>
        <Divider />
        <Card.Group>
          { glassware.map( glass => 
            <Card key={glass.id}>
              <Card.Content>
                <Card.Header>
                  <h4>Glass: {glass.name}</h4>
                  <Divider />
                </Card.Header>
                <Image style={styles.image} src={images[`i${glass.id}`]} />
              </Card.Content>
            </Card> 
          )}
        </Card.Group>
      </Container>
    )
  }
}

export default Glassware;