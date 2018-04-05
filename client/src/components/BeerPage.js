import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Table, Button } from 'semantic-ui-react';


class BeerPage extends React.Component {

  state = { beer: {} }
  componentDidMount() {
    const { beers } = this.props;
    this.setState({beers: beers.find( b => b.name === this.props.match.params.name ) })
  }

  render() {
    const { beer = {} } = this.state;
    return (
      <Container>
        <div>
        <Header>BeerPage</Header>
        </div>
        <div>
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Beer Name</Table.Cell>
                  <Table.Cell>{beer.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>beer id</Table.Cell>
                  <Table.Cell>{beer.id}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>xx</Table.Cell>
                  <Table.Cell>{beer.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>xx</Table.Cell>
                  <Table.Cell>{beer.name}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers }
}

export default connect(mapStateToProps)(BeerPage);