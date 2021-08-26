import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongItem = ({ song, selectSong }) => {
  const { title } = song;

  return (
    <>
      <div className="item">
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content"> {title} </div>
      </div>
    </>
  );
};

class SongList extends React.Component {
  render() {
    return (
      <>
        <div className="ui divided list">
          <h1> Song List </h1>
          <hr />
          {this.props.songs.map((song) => (
            <SongItem
              key={song.title}
              song={song}
              selectedSong={this.props.selectedSong}
              selectSong={this.props.selectSong}
            />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs, selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, { selectSong })(SongList);
