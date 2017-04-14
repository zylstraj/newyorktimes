import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchNews() {
  const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8c14264ac98b4b1bba489789249fbb81";
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_DATA,
    payload: request
  };
}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
   const API_KEY = '620118ceafd2ae48d2ee3a48e8a683cd';
   const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
   const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);
   //will return a promise here
   console.log('Request:', request);
   return {
     type: FETCH_WEATHER,
     payload: request
   }
 }
