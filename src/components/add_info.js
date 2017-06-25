import React from 'react';

// const AddInfo = (props) => {
//   return (
//     <h1>Fun Times</h1>
//   )
// }

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class AddInfo extends React.Component {
  constructor(props) {
    super(props);
    this.actionMove = this.actionMove.bind(this);
    this.changeThings = this.changeThings.bind(this);
    this.state = {
      fun: true
    }
  }
  //Binding this important when dealing with state
  actionMove() {
    console.log("fun times");
  }
  betterDays() {
    console.log("oh no, it's not working. better days will come!")
  }
  changeThings() {
    console.log(this.state)
    if(this.state == true) {
      this.setState({
        fun: false
      })
    }
    if(this.state == false) {
      this.setState({
        fun: true
      })
    }
  }
  render() {
    return (
      <div>
      <Greeting isLoggedIn={true} />
      <h1 onClick={this.actionMove}>Fun Times</h1>
      <p onClick={this.betterDays}>I hate being alone</p>
      <p onClick={this.changeThings}>Fomo is real</p>
      <p>I love complaining</p>
      </div>
    )
  }
}
export default AddInfo;
