import React from 'react';
import { Component } from 'react';

import SongList from '../containers/song-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SongList />
      </div>
    );
  }
}
