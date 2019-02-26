import React, { Component } from 'react';
import Nav from '../Nav/nav.js'
import Logo from '../logo/logo.js'
import Video_Logo from '../video_logo/video_logo.js'

class Home extends Component {


  constructor() {
    super()
    this.state = {
     home: true,
     about: false
    }

    

  }
  

  render() {


    if (this.state.home === true) {
    return (

     <div> 
        <Logo/>
        <Nav/>
        <Video_Logo/>
     </div>    

    );
} else if (this.state.home === false & this.state.about === true) {
    return (

        <div> 
          <p> The state is set to about = {this.state.about} </p>
        </div>    
   
       );
}


  }

}


export default Home