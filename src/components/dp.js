import React from 'react';

const Greeting = (props) => {
  console.log("Its going to be a good day");
  return (
    <div>
    <h2>Baseball Time Is Here Again</h2>
    <h3>Catch it all on WGN</h3>
    <p>This is the year and the Cubs are real</p>
    <p>So come on down to Wrigley Field</p>
    <p>{props.direction}</p>
    </div>
  )
}

export default Greeting;
