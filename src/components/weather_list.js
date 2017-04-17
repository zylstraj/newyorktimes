import React from 'react';
import { connect } from 'react-redux';
import styles from './weather_list.css';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    console.log(cityData.list[0].main.temperature);
    return (
      <div key={cityData.city.name} className={styles.cityList}>
      <p>{cityData.city.name}</p>
      <p>Temperature: {cityData.list[0].main.temp}</p>
      <p>Description: {cityData.list[0].weather[0].description}</p>
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
