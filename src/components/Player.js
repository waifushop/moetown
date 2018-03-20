import React from 'react';
import Visualizer from './Visualizer';
import PlayButton from './PlayButton';
import Volume from './Volume';
import Loader from './Loader';

export default class Player extends React.Component {
    constructor() {
        super();
        this.state = { audio: null };
    }

    render() {
        return <div className='player'>
            { this.state.audio ? <PlayButton audio={this.state.audio} /> : null }
            <Loader fileChange={this.audioFileChange.bind(this)} />
            <Visualizer className="visualizer" audio={this.state.audio} />
            <Volume audio={this.state.audio} />
        </div>
    }
}