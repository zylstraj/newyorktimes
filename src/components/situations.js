import React from 'react';
import People from './login';
import Greeting from './dp';

function Diplo(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <People />
  } else {
    return <Greeting />
  }
}
export default Diplo
