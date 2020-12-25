import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({
      spans,
    });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
        }}
      >
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
          style={{
            gridRowEnd: `span ${this.state.spans}`,
          }}
        />
      </div>
    );
  }
}

export default ImageCard;
