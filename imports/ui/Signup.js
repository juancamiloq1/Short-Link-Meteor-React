import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export default class Signup extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        error: ''
      };
    }

    componentWillMount() {
      if ( Meteor.userId() ) {
          this.props.browserHistory.replace('/links');
      }
    }

    onSubmit(e){
      e.preventDefault(); 

      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();

      if( password.length < 9 ) {
        return this.setState({ error: 'La contraseña debe tener mas de 8 caracteres.'});
      }

      Accounts.createUser({ email: email, password: password }, (err) => {   // lo mismo que solo escribir {email, password} por ES6.
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '' });
        }
      });
    }
    render(){
      return(
        <div className="boxed-view">
          <div className="boxed-view__box">
            <h1>Unete a Short Link</h1>
            { this.state.error ? <p>{this.state.error}</p> : undefined }  {/*Se muestra el error solo si existe*/}
            <form onSubmit={this.onSubmit.bind(this)} noValidate className='boxed-view__form'>
              <input type='email' ref='email' name='email' placeholder='Email'/>
              <input type='password' ref='password' name='password' placeholder='Password'/>
              <button className='button'>Crear Cuenta</button>
            </form>
            <Link to='/'>Tienes una cuenta?</Link>
          </div>
        </div>
      );
    }
  };