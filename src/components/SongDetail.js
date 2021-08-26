import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return (
    <>
      <h1>Song Detail</h1>
      <hr />
      <br />
      {selectedSong ? <p> Title: {selectedSong.title} </p> : `Select a Song!`}
      {selectedSong ? <p> Duration: {selectedSong.duration} </p> : null}
    </>
  );
};

const mapPropsToState = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapPropsToState)(SongDetail);
