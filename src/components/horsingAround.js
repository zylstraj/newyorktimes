import React from 'react';

class Horsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horses: "Horses"
    }
  }
  render() {
    return (
      <div>
        <h1>These are my horses</h1>
        <p>Adding something below</p>
      {  // New component eventually. Make a form component.
        // JSX comments
      }
        <p>{this.state.horses}</p>
      </div>
    )
  }
}

export default Horsing;
