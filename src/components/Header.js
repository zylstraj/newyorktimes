import React from 'react';
import styles from './header.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <h1>Basic Info</h1>
      <p>Get You Through the Weather and Basic Small Talk of the Day</p>
      <p>"Don't be an idiot changed my life." -Dwight Schrute</p>
    </div>
  )
}
export default Header;
