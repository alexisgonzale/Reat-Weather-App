import transformForecast from './../services/trasnformForecast';
import transformWeather from './../services/transformWeather';


export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

export const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({type:GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type:SET_WEATHER_CITY, payload});

const api_kay = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openWeathermap.org/data/2.5/forecast";
const url_weather = "http://api.openWeathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url_forecast = `${url}?q=${payload}&appid=${api_kay}`;

        // activar un indicador de busqueda de datos 
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if (date && (now - date) < 1*60*1000) {
            return;
        }

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            Weather_data => {
                const forecastData = transformForecast(Weather_data);

                //modificar el estdo con elresultado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}))

            }
            
        );
        
    }
};


export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_kay}`;

            fetch(api_weather).then( data => {
                return data.json();
            }).then( weather_data => {
                const weather = transformWeather(weather_data);     
                
                dispatch(setWeatherCity({city, weather}));
            });   
        });

    }
};