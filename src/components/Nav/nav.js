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

       

          <p id="about_nav" onClick={this.props.AboutStateEvent} > About </p>

          <p id="characters_nav" onClick={this.props.CharactersStateEvent}> Characters </p>

          <p id="media_nav" onClick={this.props.MediaStateEvent}> Media </p>

          <p>  </p>



          <p id="purchase"> Purchase </p>


         
          <button >Change!</button>
        </div>

  
      )
    
  }
}

export default Nav