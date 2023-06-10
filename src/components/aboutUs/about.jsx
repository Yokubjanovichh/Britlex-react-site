import React from "react";
import "../../main.scss";
import "../text/text.scss";
import "./about.scss";
import about from "../../img/about.svg";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="text">
          <h3>About Us</h3>
          <p className="text">
            The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
          </p>
          <div className="section">
            <div className="sec1">
              <h3>800</h3>
              <p>Pupils</p>
            </div>
            <div className="sec1">
              <h3>18</h3>
              <p>Teachers</p>
            </div>
            <div className="sec1">
              <h3>6</h3>
              <p>Foreign languages</p>
            </div>
          </div>
        </div>
        <img src={about} alt="about" />
      </div>
    );
  }
}
