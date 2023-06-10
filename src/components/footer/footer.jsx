import React from "react";
import "../../main.scss";
import "../text/text.scss";
import "./footer.scss";
import footer from "../../img/Britlex.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <div className="footer-text">
          <img src={footer} alt="logo" />
          <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
        </div>
      </div>
    );
  }
}
