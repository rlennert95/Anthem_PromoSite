import React, { Component } from 'react';
import AnthemVidLogo from '../../assets/Anthem_Standard_Key_Art_Cinemagraph_30_Sec_NoLogo.mp4'
import './video_logo.css'


class Video_Logo extends Component {

componentDidMount() {
  this.playLogo()
}

playLogo() {
  this.refs.vidRef.play();
}

  render() {
return  (

  <video ref="vidRef" id="video_logo"  src={AnthemVidLogo}/>

  );


}

}


export default Video_Logo