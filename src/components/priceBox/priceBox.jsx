import React from "react";
import "../../main.scss";
import "../text/text.scss";
import "./priceBox.scss";

export default class PriceBox extends React.Component {
  render() {
    return (
      <div className="priceBox">
        <img src={this.props.rasm} alt="priceBox" />
        <h3>{this.props.priceTitle}</h3>
        <p>{this.props.priceText}</p>
        <button>
          {this.props.price}
          <p>per month</p>
        </button>
      </div>
    );
  }
}
