import React from 'react';

export default class PlayButton extends React.Component {
    constructor() {
        super();
        this.state = { playing: false };
        this.classes = 'player-button fa fa-play fa-8x';
    }
    toggle() {
        if(this.props.audio && this.state.playing) {
            this.classes = 'player-button fa fa-play fa-8x';
            this.props.audio.pause();
        } else {
            this.classes = 'player-button fa fa-pause fa-8x';
            this.props.audio.play();
        
        }
        return this.setState({
            playing: !this.state.playing
        });
    }
    render() {
        return <div
        id='player-button'
        className={this.classes}
        onClick={this.toggle.bind(this)}>
        </div>
    }
}