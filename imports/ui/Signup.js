import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        count: this.props.count || 0 //Asi se puede dar un valor por defecto (0) o pasarle el state a travez de props.
      };
    }
    addOne(){ // Asi se escriben metodos completos, abajo en el boton se ve como se crean en el mismo boton.
      this.setState({
        count: this.state.count + 1
      });
    }
    render(){
      return(
        <div>
          <h1>Unete a Short Link App</h1>
          <p>{this.state.count}</p>
          <button onClick={() => {
            this.setState({ count: this.state.count - 1 })
          }}>-1</button> {/*Asi se escriben metodos en linea*/}
          <button onClick={this.addOne.bind(this)}>+1</button>
          <Link to='/'>Ya tienes una cuenta?</Link>
        </div>
      );
    }
  };