import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import WeatherList from './weather_list';
import styles from './search_bar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.props.fetchWeather);
    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
    // call the term - and then reset the form to blank, empty string
  }
  render() {
    return (
      <div className={styles.weatherSearch}>
      <h1 className={styles.currentWeather}>Current Weather</h1>
      <WeatherList />
      <form onSubmit={this.onFormSubmit} className={styles.input_group}>
        <input
        placeholder="Choose Your City"
        className={styles.formWeather}
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <br />
          <button type="submit" className={styles.buttonSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
