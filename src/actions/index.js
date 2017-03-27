import axios from 'axios';

const API_KEY = '6cfd914e67f74256949f175d129f9fc7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},nz`;
  // returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
