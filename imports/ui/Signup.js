import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    render(){
      return(
        <div>
          <h1>Unete a Short Link App</h1>
          <Link to='/'>Ya tienes una cuenta?</Link>
        </div>
      );
    }
  };