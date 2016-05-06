import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Song extends Component {
  constructor() {
    super();   
    // console.info(this.props);
  } 
  
  onClickCallback(name) {
    console.log(name)
  }
  
  componentWillMount() {
    console.info('component mounted, dir should be ->', this.props.songsDir);
    
  }

  render() {
    return (
      <div  onClick={this.onClickCallback.bind(this, this.props.song.name)}>
        <p>{this.props.song.name}</p>
      </div>
    )
  }
}