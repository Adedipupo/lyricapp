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
              `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
          )
      })
      .then(res => {
          this.setState({ track: res.data.message.body.track})
      })
      .catch((err) => console.log(err));
  }

  render() {
   const { track, lyrics } = this.state;
   if (track === underfined) {
       
   } else {
       
   }
  }
}

export default Lyrics;
