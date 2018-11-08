import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_kay = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openWeathermap.org/data/2.5/weather";




class Weatherlocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_kay}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState( { data });           
        });   
    }

    render = () => { 
        const {onWeatherLocationClick} = this.props;
        const { city, data } = this.state;  
        return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city ={city} />
            { data ? <WeatherData data={data} /> : 
            <CircularProgress size={40} thichness={3.6} />}
        </div>);
    };
           
}

Weatherlocation.protoTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,

}

export default Weatherlocation;
