import React, { Component } from 'react';
import Nav from '../Nav/nav.js'
import Logo from '../logo/logo.js'
import Video_Logo from '../video_logo/video_logo.js'
import About from '../About/about.js'
import Characters from '../Characters/characters.js'
import Media from '../Media/media.js'

class Home extends Component {


  constructor() {
    super()
    this.state = {
      home: true,
      about: false,
      characters: false,
      media: false
    }
  }


  AboutState() {
    this.setState({
      home: false,
      about: true,
      characters: false,
      media: false,
    })
  }


  CharactersState() {
    this.setState({
      home: false,
      about: false,
      characters: true,
      media: false
    })
  }

  MediaState() {
    this.setState({
      home: false,
      about: false,
      characters: false,
      media: true
    })
  }


  render() {


    if (this.state.home === true) {
      return (

        <div>
          <Logo />
          <Nav
            AboutStateEvent={this.AboutState.bind(this)}
            CharactersStateEvent={this.CharactersState.bind(this)}
            MediaStateEvent={this.MediaState.bind(this)}
          />
          <Video_Logo />
          {/* <button onClick={this.StateUpdate.bind(this)}> test </button> */}
        </div>

      );
    } else if (
      this.state.home === false
      & this.state.about === true
    ) {
      return (

        <div>
          <Logo />
          <Nav
            AboutStateEvent={this.AboutState.bind(this)}
            CharactersStateEvent={this.CharactersState.bind(this)}
            MediaStateEvent={this.MediaState.bind(this)}
          />
          <About />
        </div>

      );
    } else if (
      this.state.home === false
      & this.state.characters === true
    ) {
      return (
        <div>
          <Logo />
          <Nav
            AboutStateEvent={this.AboutState.bind(this)}
            CharactersStateEvent={this.CharactersState.bind(this)}
            MediaStateEvent={this.MediaState.bind(this)}
          />
          <Characters />
        </div>
      )
    } else if (
      this.state.home === false
      & this.state.media === true
    ) {
      return (
      <div>
        <Logo />
        <Nav
          AboutStateEvent={this.AboutState.bind(this)}
          CharactersStateEvent={this.CharactersState.bind(this)}
          MediaStateEvent={this.MediaState.bind(this)}
        />
        <Media />
      </div>
      )
    }



  }

}


export default Home