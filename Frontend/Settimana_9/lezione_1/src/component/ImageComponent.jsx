import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    const { src, alt } = this.props;

    return (
      <div style={{ paddingTop: "10px" }}>
        <img src={src} alt={alt} />
      </div>
    );
  }
}

export default ImageComponent;
