import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Machine Learned Dreams",
      duration: "5:36"
    },
    {
      title: "WitchCraft",
      duration: "4:54"
    },
    {
      title: "Entropic Curse",
      duration: "2:30"
    },
    {
      title: `Want You`,
      duration: `6:33`
    },
    {
      title: `Naiad's Reprise`,
      duration: "4:10"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case `SONG_SELECTED`:
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
