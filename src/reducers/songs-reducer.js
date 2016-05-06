import songsData from '../../songs-data.js';

export default function(songs = songsData, action) {
  switch(action.type) {
    case 'play':
      console.log('playing...', action.song);
      return songs
    default:
      console.log('something else');
      return songs;
  }
}