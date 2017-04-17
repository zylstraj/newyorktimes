import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
import styles from './news_stories.css';

class NewsStories extends React.Component {
  componentDidMount() {
    console.log('this would be a good time to call an action creator');
    this.props.fetchNews();
    console.log(this.props)
  }
  createNewsList() {
    return this.props.news.slice(0,10).map((story) => {
      const url = story.url;
      return(
        <li className={styles.li_News} key={story.title}>
        <h2 className={styles.h2_News}><a href={url} target="_blank">{story.title}</a></h2>
        </li>
      )
    })
  }
  render() {
    console.log(this.props.news)
    return (
      <div className={styles.topTen}>
        <h1>Top 10 Stories</h1>
        <p>From The NY Times</p>
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
