import React from 'react';
import { connect } from 'react-redux';

class NewsStories extends React.Component {
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
export default connect(mapStateToProps)(NewsStories);
