import React from 'react';
import PropTypes from 'prop-types';
import Weatherlocation from './WeatherLocation'
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) =>{
    const hanldeWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const strToComponent = cities => (
        cities.map( city => 
            (
                <Weatherlocation 
                    key={city} 
                    city={city} 
                    onWeatherLocationClick={() => hanldeWeatherLocationClick(city)} />))
    );

    return (<div className="locationList">
        {strToComponent(cities)}
    </div>);
};
LocationList.protoType = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;