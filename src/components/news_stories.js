import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import axios from 'axios';

class NewsStories extends React.Component {
  componentDidMount() {
    console.log('this would be a good time to call an action creator');
    this.props.fetchNews();
    console.log(this.props)
  }
  createNewsList() {
    return this.props.news.map((story) => {
      return(
        <li key={story.title}>
        <h1>{story.title}</h1>
        </li>
      )
    })
  }
  render() {
    console.log(this.props.news)
    return (
      <div>
        <h1>Title: </h1>
        <p>description</p>
        <ul>
        {this.createNewsList()}
        </ul>

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {news: state.news}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsStories);
