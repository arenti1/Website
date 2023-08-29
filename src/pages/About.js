import React from "react";
import aboutus from "../img/aboutus.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutus})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are a new company in the field of robotics and AI. The team started as 
          college friends with the same purpose. To push the levels of robotics and 
          be on the very edge of newest technology. We are developers with many 
          different skills and what brings us together is the passion and commitment
          about our job and our goal is to bring to the market a new type of robot
          assistant that will be powered by the latest AI. This robot is called Epsilon.
          It is a luxury robot assistant that will have many uses. Please follow us in our
          journey to make this goal possible.
        </p>
      </div>
    </div>
  );
}

export default About;
