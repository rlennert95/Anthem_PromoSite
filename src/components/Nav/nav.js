import React, { Component } from 'react';

class Nav extends Component {

  Test() {
    alert("hello")
  }

  render() {
    return (

      <div> <p onClick={this.Test}> About </p> Characters Media </div>

    );


  }

}


export default Nav