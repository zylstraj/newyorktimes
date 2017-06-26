import React from 'react';
import People from './loginBaby';
import Greeting from './dp';

class Horsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horses: "Horses"
    }
  }
  render() {
    let element = null;
    if (this.state = "Penguins") {
      element = <People />
    } else {
      element = <Greeting />
    }
    return (
      <div>
        <h1>These are my horses</h1>
        <p>Adding something below</p>
      {  // New component eventually. Make a form component.
        // JSX comments
      }
        <p>{this.state.horses}</p>
        { element }
      </div>
    )
  }
}

export default Horsing;
