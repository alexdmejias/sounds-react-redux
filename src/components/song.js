import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Song extends Component {
  onClickCallback(name) {
    console.log(name)
  }

  render() {
    return (
      <div  onClick={this.onClickCallback.bind(this, this.props.song.name)}>
        <p>{this.props.song.name}</p>
      </div>
    )
  }
}