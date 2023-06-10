import React from "react";
import "../../main.scss";
import "../text/text.scss";
import "./box.scss";
import Btn from "../button/btn";

export default class Box extends React.Component {
  render() {
    return (
      <div className="box" style={{ flexDirection: this.props.direct, gridArea: this.props.area }}>
        <img src={this.props.url} alt={this.props.alt} />
        <div className="box-text">
          <p className="titleSkill">{this.props.title}</p>
          <p className="boxText">{this.props.ptext}</p>
          <p className="boxText boxText2">{this.props.ptext2}</p>
          <Btn pad="15px" padY="51px" size="20px" line="30px" wight="500" btnText={this.props.buttonText} />
        </div>
      </div>
    );
  }
}
