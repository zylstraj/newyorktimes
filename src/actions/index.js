import axios from 'axios';

const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8c14264ac98b4b1bba489789249fbb81";

export const FETCH_DATA = 'FETCH_DATA';

export function fetchNews(news) {
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_DATA,
    payload: request
  };
}
