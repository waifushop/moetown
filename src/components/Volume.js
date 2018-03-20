import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Volume.css';
export default class Volume extends React.Component {

    constructor() {
        super();
        this.state = { volume: 100, oldVolume: 100 };
    }
    
    changeVolume(value) {
        this.setState({ volume: value, oldVolume: value });
        this.props.audio.volume = value / 100;
    }

    muteVolume() {
        if(this.state.volume === 0) {
            this.props.audio.volume = this.state.oldVolume / 100;
            return this.setState({ volume: this.state.oldVolume });
        }
        this.setState({ volume: 0 });
        this.props.audio.volume = 0.0;
        console.log(this);
    }

    volumeIcon() {
        if(this.state.volume <= 25) {
            return 'fa fa-volume-off fa-2x fixmywidthlol';
        } else if(this.state.volume > 25 && this.state.volume <= 75) {
            return 'fa fa-volume-down fa-2x fixmywidthlol';
        } else {
            return 'fa fa-volume-up fa-2x fixmywidthlol';
        }
    }

    render() {
        return <div className='slider slider-open'>
        <i className={this.volumeIcon()} onClick={this.muteVolume.bind(this)} />
        <Slider defaultValue={100} min={0} max={100} value={this.state.volume} onChange={e => this.changeVolume(e)} />
        </div>
    }
}