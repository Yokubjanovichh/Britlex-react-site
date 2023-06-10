import React from "react";
import "../../main.scss";
import "../text/text.scss";
import "../skills/skills.scss";
import Box from "../skills-box/box";
import box1 from "../../img/box-1.svg";
import box2 from "../../img/box-2.svg";
import box3 from "../../img/box-3.svg";
import box4 from "../../img/box-4.svg";

export default class Skills extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Skills</h1>
        <div className="skills">
          <Box
            direct="column"
            area="box1"
            url={box1}
            alt="box-1"
            title="Writing"
            ptext="Improve your English skills and confidence. 
          Live classes and interactive lessons online. 
          20% extra free for a limited time only"
            buttonText="Learn more"
            ptext2="
          Learn English online and improve your 
          skills through our high-quality courses
          and resources – all designed for adult language learners.
          "
          />
          <Box
            direct="column"
            area="box2"
            url={box2}
            alt="box-2"
            title="Speaking"
            ptext="One of the most important and extensive 
          areas of natural science, the science that 
          studies substances, also their composition "
            buttonText="Learn more"
          />

          <Box
            direct="column"
            area="box3"
            url={box3}
            alt="box-3"
            title="Reading"
            ptext="perception and response actions of the user
          resulting from the use and/or upcoming use 
          of the product, system or service"
            buttonText="Learn more"
          />

          <Box
            direct="row-reverse"
            area="box4"
            url={box4}
            alt="box-4"
            title="Listening"
            ptext="Here you can find activities to practise
          your listening skills. Listening will help you
          to improve your understanding "
            buttonText="Learn more"
          />
        </div>
      </>
    );
  }
}
