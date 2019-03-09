import React, { Component } from 'react';
import AnthemLogo from '../../assets/Anthem_Logo.png'
import './logo.css'

class Logo extends Component {
  constructor() {
      super()
      this.state = {
          home: false,
         
      }

  }



  render() {




      return (



          <div id="">

<img id="main_logo" src={AnthemLogo}  onClick={this.props.HomeStateEvent}/>

      </div>


      )

  }
}
export default Logo;

