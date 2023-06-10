import React from "react";
import "./hero.scss";
import "../../main.scss";
import lampa from "../../img/lampochka.svg";
import girl from "../../img/girl.svg";
import Text from "../text/text";
import Btn from "../button/btn";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-text">
          <div className="textWithImg">
            <h1>
              Learn <br /> Any Foreign Language
            </h1>
            <img src={lampa} alt="lampa" />
          </div>
          <Text width={"550px"} wight="400" ln="36px" size="24px" text="With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson." />
          <Btn btnText={"Get started"} pad={"32px"} padY={"117px"} size={"36px"} wight={"600"} line={"54px"} />
        </div>
        <img className="girl" src={girl} alt="girl" />
      </div>
    );
  }
}
