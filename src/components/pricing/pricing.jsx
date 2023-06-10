import React from "react";
import PriceBox from "../priceBox/priceBox";
import "../../main.scss";
import "../text/text.scss";
import "./pricing.scss";
import priceImg1 from "../../img/priceBox1.svg";
import priceImg2 from "../../img/priceBox2.svg";
import priceImg3 from "../../img/priceBox3.svg";

export default class Pricing extends React.Component {
  render() {
    return (
      <div className="price">
        <h1>Pricing</h1>
        <div className="priceBoxes">
          <PriceBox
            rasm={priceImg1}
            priceTitle="Self-study online course"
            priceText="Start learning English online in live classes
with qualified EC teachers and students 
from all over the world."
            price=" £5.99"
          />
          <PriceBox
            rasm={priceImg2}
            priceTitle="Live online classes"
            priceText="Interactive group classes with expert
            teachers. Free 7-day trial"
            price="£12.99"
          />
          <PriceBox
            rasm={priceImg3}
            priceTitle="Personal Tuition"
            priceText="Online one-to-one English tutoring – enjoy
            our first session for only $1"
            price=" £20.99"
          />
        </div>
      </div>
    );
  }
}
