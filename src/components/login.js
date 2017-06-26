import React from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin() {
    this.setState({
      isLoggedIn: false
    })
    console.log(this.state);
  }
  handleLogout() {
    this.setState({
      isLoggedIn: true
    })
    console.log(this.state);
  }
  render() {
    return(
      <div>
        <p onClick={this.handleLogout}>Info</p>
        <p onClick={this.handleLogin}>Okay</p>
      </div>
    )

  }
}
export default LoginControl;
