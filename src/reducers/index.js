import { combineReducers } from 'redux';
import SongsReducer from './songs-reducer.js';

const rootReducer = combineReducers({
  songs: SongsReducer
});

export default rootReducer;
