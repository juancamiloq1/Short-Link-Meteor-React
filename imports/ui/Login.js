import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    render(){
      return(
        <div>
          <h1>Inicia Sesion en Short Link App</h1>
          login form here
          <Link to='/signup'>Tienes una cuenta?</Link>
        </div>
      );
    }
  };