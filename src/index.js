import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import NewsStory from './components/NewsStory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      News: []
    }
  }
  componentDidMount() {
    const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8c14264ac98b4b1bba489789249fbb81";

    axios.get(url)
    .then(result => {

    this.setState({
      News: {
        "description": result.data.results
      }
    })
  })
}
  render() {
    return(
      <div>
        <p>Hello world</p>
        <NewsStory news={this.state.News} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
