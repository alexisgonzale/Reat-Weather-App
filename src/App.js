import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Medellín',
  'Santiago',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Cali', 
  'Washington'
];

class App extends Component {
  constructor() {
    super();

    this.state = { city: null };
  }
  handleSelectedLocation = city => {
    this.setState({ city });
  }

  render() {
    const { city } = this.state; 
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
            <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className= "datail">
                { 
                  city ? 
                  <ForecastExtended city={ city }></ForecastExtended> :
                  <h3>No se seleccionó ciudad</h3>
                }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
