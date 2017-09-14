import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: ''
      };
    }
    onSubmit(e){
      e.preventDefault(); 

      this.setState({
        error: 'Algo salío mal.'
      });
    }
    render(){
      return(
        <div>
          <h1>Unete a Short Link App</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined }
          <form>
            <input type='email' name='email' placeholder='Email'/>
            <input type='password' name='password' placeholder='Password'/>
            <button onClick={this.onSubmit.bind(this)}>Crear Cuenta</button>
          </form>
          <Link to='/'>Ya tienes una cuenta?</Link>
        </div>
      );
    }
  };