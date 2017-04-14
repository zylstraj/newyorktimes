import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  news: NewsReducer,
  weather: WeatherReducer
});
export default rootReducer;
