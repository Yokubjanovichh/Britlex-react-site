/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../img/Britlex.svg";
import "./navbar.scss";
import "../../main.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="#">
          <img src={logo} alt="Britlex" />
        </a>
        <ul>
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <button>Let's Talk</button>
      </div>
    );
  }
}
