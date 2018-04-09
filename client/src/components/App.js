import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Beers from './Beers';
import BeerPage from './BeerPage';
import Breweries from './Breweries';
import BreweryPage from './BreweryPage';
import Glassware from './Glassware';
import Locations from './Locations';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beer/:id' component={BeerPage} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/brewery/:id' component={BreweryPage} />
          <Route exact path='/glassware' component={Glassware} />
          <Route exact path='/locations' component={Locations} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
