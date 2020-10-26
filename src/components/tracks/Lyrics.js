import React, { Component } from "react";
import Axios from "axios";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };
  componentDidMount() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((res) => {
        //     console.log(res.data)
        this.setState({lyrics: res.data.message.body.lyrics });
          return Axios.get(
              `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Lyricsss</h1>
      </div>
    );
  }
}

export default Lyrics;
