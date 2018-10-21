import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render(){
    return(
      <div className = 'header'>
        <div className = 'logo'></div>
        <h1 className = 'logoName'> Houser </h1>
      </div>
    );
  }

}

export default Header;