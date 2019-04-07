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

       

          <span id="about_nav" onClick={this.props.AboutStateEvent} > About </span>
          <span> / </span>
          <span id="characters_nav" onClick={this.props.CharactersStateEvent}> Characters </span>
          <span> / </span>
          <span id="media_nav" onClick={this.props.MediaStateEvent}> Media </span>

          





         
        </div>

  
      )
    
  }
}

export default Nav