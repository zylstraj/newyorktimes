import React from 'react';
import NewsStories from './news_stories';
import SearchBar from './search-bar';
import WeatherList from './weather_list';

const App = () => {
    return (
      <div>
        <NewsStories />
        <SearchBar />
        <WeatherList />
      </div>
  )
}
export default App;
