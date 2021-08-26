// ACTION CREATOR
export const selectSong = (song) => {
  // ACTION
  return {
    type: `SONG_SELECTED`, // MANDATORY FIELD
    payload: song // OPTIONAL FIELD
  };
};
