import React from 'react';
import { connect } from 'react-redux';
import styles from './weather_list.css';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    console.log(cityData.list[0].main.temperature);
    return (
      <div key={cityData.city.name} className={styles.cityList}>
        <p className={styles.cityName}>{cityData.city.name}</p>
        <div className={styles.cityToday}>
          <h3>Today</h3>
          <p className={styles.cityInfo}>Temperature: {cityData.list[0].main.temp}</p>
          <p className={styles.cityInfo}>Description: {cityData.list[0].weather[0].description}</p>
          </div>
          <div className={styles.cityTomorrow}>
          <h3>Tomorrow</h3>
          <p className={styles.cityInfo}>Temperature: {cityData.list[5].main.temp}</p>
          <p className={styles.cityInfo}>Description: {cityData.list[5].weather[0].description}</p>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
      {this.props.weather.map(this.renderWeather)}
      </div>

    )
  }
}

function mapStateToProps({weather}) {
  console.log(weather);
  return { weather : weather }
}
export default connect(mapStateToProps)(WeatherList);
