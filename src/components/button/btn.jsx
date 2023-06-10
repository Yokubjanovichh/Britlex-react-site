import React from "react";
import "../../main.scss";
import "./btn.scss";

export default class Btn extends React.Component {
  render() {
    return (
      <>
        <button className="btn" style={{ paddingTop: this.props.pad, paddingBottom: this.props.pad, paddingLeft: this.props.padY, paddingRight: this.props.padY, fontSize: this.props.size, fontWeight: this.props.wight, lineHeight: this.props.line }}>
          {this.props.btnText}
        </button>
      </>
    );
  }
}
