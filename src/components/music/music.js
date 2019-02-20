import React, { Component } from 'react';
import AnthemTheme from '../../assets/Anthem_Valor_FreelancerTheme.wav'



class Music extends Component {

componentDidMount() {
  this.playMusic()
}

playMusic() {
  this.refs.theme.play();
  this.refs.theme.loop = true;

}

  render() {
return  (

<audio ref="theme" src={AnthemTheme}/>

  );


}

}


export default Music