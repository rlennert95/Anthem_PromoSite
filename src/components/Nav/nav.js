import React, { Component } from 'react';
import './nav.css'



class Nav extends Component {
  constructor() {
    super()
    this.state = {
      home: true,
      about: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ about: true, home: false })
  }

  render() {
    if (this.state.home === true & this.state.about === false) {
      return (

        <div id="navbar">

          <p> About </p>

          <p> Characters </p>

          <p> Media </p>



          <p id="purchase"> Purchase </p>


          <h1>{this.state.about}</h1>
          <button onClick={this.handleClick}>Change!</button>
        </div>
      )
    } else if (this.state.home === false & this.state.about === true) {
      return (
        <div> About </div>
      )
    }

  }
}

export default Nav