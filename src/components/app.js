import React from 'react';
import NewsStories from './news_stories';
import SearchBar from './search-bar';
import Header from './Header';
import styles from './app.css';
import AddInfo from './add_info';
import DoubleDay from './doubleday';
import LoginControl from './login';
import Horsing from './horsingAround';
import Diplo from './situations';
import Boyfriend from './boyfriends';

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
        <DoubleDay />
        <LoginControl />
        <Horsing />
        <Diplo isLoggedIn={false} />
        <Boyfriend />
        </div>
      </div>
  )
}
export default App;
