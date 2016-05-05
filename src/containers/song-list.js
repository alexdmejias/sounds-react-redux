import React, {Component} from 'react';
import {connect} from 'react-redux';

import Song from '../components/song';

class SongList extends Component {
  renderList() {
    var self = this;
    return this.props.songs.map(function(song, key) {
      return (
        <Song key={key} song={song}/>
      )
    });
  }

  _playSong(songName) {
    console.log(songName)
  }

  render() {
    return (
      <div className="songList">
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongList);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({})
// }