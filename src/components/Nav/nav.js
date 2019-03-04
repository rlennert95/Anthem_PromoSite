import React, { Component } from 'react';
import './nav.css'
import Home from "../Home/home.js";


class Nav extends Component {
  constructor() {
    super()
    this.state = {
      home: false,
      about: false
    }
    
  }



  render() {

    


      return (

        

        <div id="navbar">

       

          <p> About </p>

          <p> Characters </p>

          <p> Media </p>

          <p>  </p>



          <p id="purchase"> Purchase </p>


         
          <button onClick={this.props.test2}>Change!</button>
        </div>

  
      )
    
  }
}

export default Nav