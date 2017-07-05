import React from 'react';

function People(props) {
  return (
    <div>
      <h1>Fun Times</h1>
      <p>Learning as we go</p>
      <p>{props.direction}</p>
    </div>
  )
}

export default People;
