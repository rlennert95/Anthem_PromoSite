import React, { Component } from 'react';
import './nav.css'

class Nav extends Component {

  Test() {
    alert("hello")
  }

  render() {
    return (

      <div id="navbar" onClick={this.Test}> 

      <p> About </p>

      <p> Characters </p>

      <p> Media </p> 

      <p id="purchase"> Purchase Anthem </p>
      
      </div>

    );


  }

}


export default Nav