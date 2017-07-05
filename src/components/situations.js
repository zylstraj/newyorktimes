import React from 'react';
import People from './loginBaby';
import Greeting from './dp';

function Diplo(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn)
  if(isLoggedIn == true) {
    return <People direction="North" />
  } else {
    return <Greeting direction="South" />
  }
}
export default Diplo;
