import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import * as logo from './logo.svg';
import './App.css';
import Visualizer from './components/Visualizer';
import PlayButton from './components/PlayButton';
import Volume from './components/Volume';
import Loader from './components/Loader';

class App extends Component {
  constructor() {
    super();
    this.state = { audio: new Audio(), logo: logo };
  }

  audioFileChange(file) {
    const src = URL.createObjectURL(file);
    const audio = new Audio(src);
    this.setState({ audio: audio });
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Music Player</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css" integrity="sha384-v2Tw72dyUXeU3y4aM2Y0tBJQkGfplr39mxZqlTBDUZAb9BGoC40+rdFCG0m10lXk" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css" integrity="sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P" crossorigin="anonymous" />
        </Helmet>
        <div className="blurred-bg" />
        <div className="group">
          <div className="title">
            <img id="logo" className="logo" src={this.state.logo} alt='Logo' refs='logo' />
          </div>
          <div className='player'>
            <PlayButton audio={this.state.audio} />
            <Loader fileChange={this.audioFileChange.bind(this)} />
          </div>
        </div>
        <div className="group player-additional">
          <div className="nowplaying">Tsundere Alley - Feel So Good</div>
          <Volume audio={this.state.audio} />
        </div>
        <Visualizer className="visualizer" audio={this.state.audio} logo={this.state.logo} />
      </div>
    );
  }
}

export default App;
