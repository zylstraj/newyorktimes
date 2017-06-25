import React from 'react';
import NewsStories from './news_stories';
import SearchBar from './search-bar';
import Header from './Header';
import styles from './app.css';
import AddInfo from './add_info';

const App = () => {
    return (
      <div>
        <Header />
        <div>
        <SearchBar />
        </div>
        <NewsStories />
        <div>
        <AddInfo />
        </div>
      </div>
  )
}
export default App;
