import React, { Component } from 'react';

class Gif extends Component {


  handleClick = () => {
    this.props.changeGif(this.props.id);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={src} className="gif" alt="" onClick={this.handleClick} />;
  }
}

export default Gif;
