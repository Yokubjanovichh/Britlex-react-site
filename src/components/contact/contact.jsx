import React from "react";
import Btn from "../button/btn";
import "../../main.scss";
import "../text/text.scss";
import "./contact.scss";
import contact from "../../img/contact.svg";

export default class About extends React.Component {
  render() {
    return (
      <div className="contact">
        <img src={contact} alt="contact" />
        <div className="contactText">
          <h2>Contact Us</h2>
          <p>Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources</p>
          <div className="send">
            <input type="text" placeholder="Enter Your E-mail" />
            <Btn pad="25px" padY="81px" size="20px" wight="500" line="30px" btnText="Subscribe" />
          </div>
        </div>
      </div>
    );
  }
}
