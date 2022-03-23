import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();

    this.state = { span: 1 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ span: Math.ceil(height / 150) });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default ImageCard;
