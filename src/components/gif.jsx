import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={src} className="gif" alt="" />;
  }
}

export default Gif;
