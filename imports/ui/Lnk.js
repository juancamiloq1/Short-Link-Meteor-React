import React from 'react';

export default class Link extends React.Component{
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
      this.props.history.push('/');
  }
  render() {
      return (
          <div>
              <h1>Your Links</h1>
              <button onClick={this.onLogout}>Cerrar Sesión</button>
          </div>
      );
  }
};