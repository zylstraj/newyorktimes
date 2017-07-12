import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import WeatherReducer from './reducer_weather';
import LearningReducer from './learning';

const rootReducer = combineReducers({
  news: NewsReducer,
  weather: WeatherReducer,
  learning: LearningReducer
});
export default rootReducer;
