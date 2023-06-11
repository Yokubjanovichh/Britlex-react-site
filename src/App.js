import React from "react";
import "./main.scss";
import Hero from "./components/hero/hero";
import About from "./components/aboutUs/about";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Pricing from "./components/pricing/pricing";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    );
  }
}
