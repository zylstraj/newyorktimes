import React from 'react';

// const AddInfo = (props) => {
//   return (
//     <h1>Fun Times</h1>
//   )
// }
class AddInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Fun Times</h1>
      <p>I hate being alone</p>
      <p>Fomo is real</p>
      <p>I love complaining</p>
      </div>
    )
  }
}
export default AddInfo;
