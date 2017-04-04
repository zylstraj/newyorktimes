import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';

class NewsStories extends React.Component {
  componentWillMount() {
    console.log('this would be a good time to call an action creator');
    this.props.fetchNews();
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h1>Title: </h1>
        <p>description</p>
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
