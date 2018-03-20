import React from 'react';
import BaseVisualizer from './shared/BaseVisualizer';
import BgVisualizer from './shared/BgVisualizer';
let logo;
let button;
window.setTimeout(() => { logo = document.getElementById('logo'), button = document.getElementById('player-button')}, 5);

export default class Visualizer extends React.Component {
    constructor() {
        super();
        this.state = { effect: null, bg: null };
    }

    componentWillReceiveProps(nextProps) {
        button = document.getElementById('player-button');
        this.setState({ effect: new BaseVisualizer(this.refs.visualizerCanvas), bg: new BgVisualizer(this.refs.yes, logo, button)});
        if(this.props.audio !== nextProps.audio && nextProps.audio && nextProps.audio instanceof window.Audio) {
            const context = new AudioContext();
            const source = context.createMediaElementSource(nextProps.audio);
            const analyser = context.createAnalyser();
            analyser.fftSize = 4096;
            analyser.minDecibels = -85;
            source.connect(analyser);
            source.connect(context.destination);
            const data = new Uint8Array(analyser.frequencyBinCount);
            const visualizer = new BaseVisualizer(this.refs.visualizerCanvas);
            this.setState({ effect: visualizer, bg: new BgVisualizer(this.refs.yes, logo, button) });
            const draw = () => {
                // RIP MOBILE USERS
                analyser.getByteFrequencyData(data);
                this.state.effect.draw(data);
                this.state.bg.draw(data);
                window.requestAnimationFrame(draw);
            };
            window.requestAnimationFrame(draw);
        }
    }

    render() {
        return <div>
            <canvas className="background-visualizer" width={window.innerWidth} height={window.innerHeight} ref="yes" />
            <canvas className="visualizer" width={window.innerWidth} height={window.innerHeight} ref="visualizerCanvas"></canvas>
            </div>
    }
}