import React from 'react';
import NewsStories from './news_stories';
import SearchBar from './search-bar';
import Header from './Header';

const App = () => {
    return (
      <div>
        <Header />
        <NewsStories />
        <div>
        <SearchBar />
        </div>
      </div>
  )
}
export default App;
