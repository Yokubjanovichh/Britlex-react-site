import React from "react";
import "../../main.scss";
import "./text.scss";

export default class Text extends React.Component {
  render() {
    return (
      <p
        className="text"
        style={{
          width: this.props.width,
          fontWeight: this.props.weight,
          fontSize: this.props.size,
          lineHeight: this.props.ln,
        }}
      >
        {this.props.text}
      </p>
    );
  }
}
