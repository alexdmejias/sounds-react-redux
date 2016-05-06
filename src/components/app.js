import React from 'react';
import { Component } from 'react';

import SongList from '../containers/song-list';

let songsDir = './songs/';

export default class App extends Component {
  render() {
    return (
      <div>
        <SongList songsDir={songsDir} />
      </div>
    );
  }
}
