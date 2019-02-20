import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/nav.js'
import Logo from './components/logo/logo.js'
import Video_Logo from './components/video_logo/video_logo.js'
import Music from './components/music/music.js'

class App extends Component {


  
  render() {
    return (
      <div className="App">

      <Logo/>
      <Nav/>
      <Video_Logo/>
      <Music/>




      </div>
    );
  }
}

export default App;
