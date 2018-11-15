import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css'


const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
    <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={ forecast.weekDay } 
        hour={forecast.hour} 
        data={ forecast.data }>
    </ForecastItem>))
}

const renderProgress = () => {
    return <h5>Cargando pronóstico extendido...</h5>;
}


const  ForecastExtended = ({city, forecastData }) => (
            <div>
                <h3 className= 'forecast-title'>Pronóstico Extendido para { city }</h3>
                {forecastData ? 
                    renderForecastItemDays(forecastData):
                    renderProgress()
                }
            </div>
);
ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

 export default ForecastExtended;