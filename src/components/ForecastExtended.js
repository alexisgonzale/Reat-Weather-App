import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/trasnformForecast';
import './styles.css'
// import WeatherData from './WeatherLocation/WeatherData/index'

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo'
// ];
// const data = {
//     temperature: 10,
//     humidity:10,
//     weatherState: 'normal',
//     wind: 'normal',
// }

const api_kay = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openWeathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.udeateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.udeateCity(nextProps.city);
        }
    }
    
    udeateCity = city => {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_kay}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            Weather_data => {
                const forecastData = transformForecast(Weather_data);
                this.setState({ forecastData })
            }
        );
    }

    renderForecastItemDays(forecastData){
        return forecastData.map( forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={ forecast.weekDay } 
            hour={forecast.hour} 
            data={ forecast.data }>
        </ForecastItem>))
    }

    renderProgress = () => {
        return <h5>Cargando pronóstico extendido...</h5>;
    }

    render() {
        const {city} = this.props;
        const {forecastData } = this.state;
        return (
            <div>
                <h3 className= 'forecast-title'>Pronóstico Extendido para { city }</h3>
                {
                   forecastData ? 
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }
            </div>
        );
    }
}
ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired,
}

 export default ForecastExtended;