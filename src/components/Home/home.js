import React, { Component } from 'react';
import Nav from '../Nav/nav.js'
import Logo from '../logo/logo.js'
import Video_Logo from '../video_logo/video_logo.js'
import About from '../About/about.js'

class Home extends Component {


  constructor() {
    super()
    this.state = {
     home: true,
     about: false
    }

   

  }
  
  
StateUpdate() {
  this.setState({
    home:false,
    about: true
  })
}

  render() {
console.log("hello "+ this.props.name)

    if (this.state.home === true) {
    return (

     <div> 
        <Logo/>
        <Nav test={this.props.name} test2={this.StateUpdate.bind(this)}/>
        <Video_Logo/>
        {/* <button onClick={this.StateUpdate.bind(this)}> test </button> */}
     </div>    

    );
} else if (this.state.home === false & this.state.about === true) {
    return (

        <div> 
          <Logo/>
          <Nav test={this.props.name} test2={this.StateUpdate.bind(this)}/>
          <About/>
        </div>    
   
       );
}



  }

}


export default Home