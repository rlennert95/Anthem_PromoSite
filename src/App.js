import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/nav.js'
import Logo from './components/logo/logo.js'
import Video_Logo from './components/video_logo/video_logo.js'
import Music from './components/music/music.js'
import Home from './components/Home/home.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
     home: true,
     about: false
    }

  }

  
  render() {
    return (
      <div className="App">
        <Home/>
        <Music />
      </div>
    );
  }
}

export default App;
