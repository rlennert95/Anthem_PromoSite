import React from "react";
import AnthemVidLogo from '../../assets/Anthem_Standard_Key_Art_Cinemagraph_30_Sec_NoLogo.mp4'
import './video_logo.css'

function Video_Logo() {
  return (
   <video id="video_logo" src={AnthemVidLogo}/>
  );
}

export default Video_Logo;
