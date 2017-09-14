import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: ''
      };
    }
    onSubmit(e){
      e.preventDefault(); 

      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();
      Accounts.createUser({ email: email, password: password}, (err) => {   // lo mismo que solo escribir {email, password} por ES6.
        console.log('Crear Cuenta callback', err);
      });
    }
    render(){
      return(
        <div>
          <h1>Unete a Short Link App</h1>
          { this.state.error ? <p>{this.state.error}</p> : undefined }  {/*Se muestra el error solo si existe*/}
          <form>
            <input type='email' ref='email' name='email' placeholder='Email'/>
            <input type='password' ref='password' name='password' placeholder='Password'/>
            <button onClick={this.onSubmit.bind(this)}>Crear Cuenta</button>
          </form>
          <Link to='/'>Ya tienes una cuenta?</Link>
        </div>
      );
    }
  };