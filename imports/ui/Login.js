import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';


export default class Login extends React.Component{
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
    
    Meteor.loginWithPassword({email: email}, password, (err) => {
      if (err) {
        this.setState({ error: 'No fue posible iniciar sesión.' });
      } else {
        this.setState({ error: '' });
      }
    });

  }
  render(){
    return(
      <div>
        <h1>Short Link App</h1>
        { this.state.error ? <p>{this.state.error}</p> : undefined }  {/*Se muestra el error solo si existe*/}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type='email' ref='email' name='email' placeholder='Email'/>
          <input type='password' ref='password' name='password' placeholder='Password'/>
          <button>Iniciar Sesión</button>
        </form>
        <Link to='/signup'>Tienes una cuenta?</Link>
      </div>
    );
  }
};