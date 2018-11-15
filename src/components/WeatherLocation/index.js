import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const api_kay = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openWeathermap.org/data/2.5/weather";

const Weatherlocation = ({ onWeatherLocationClick, city, data }) => (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city ={city} />
            { data ? <WeatherData data={data} /> : 
            <CircularProgress size={40} thichness={3.6} />}
        </div>          
);

Weatherlocation.protoTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),

}

export default Weatherlocation;
