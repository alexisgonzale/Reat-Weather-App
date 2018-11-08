import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';
const transformForecast = data => (
    data.list.filter(item => {
        let fechaCompleta=item.dt_txt;
        let fechaHora=fechaCompleta.split(' ');
        let hora = fechaHora[1].split(':');
        if (hora[0] === '06' || hora[0] ===  '12'  || hora[0] === '18') {
            return (item);
        }
    }).map(item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: item.dt_txt.split(' ')[1],
            data: transformWeather(item)
        }
    ))
);


export default transformForecast;