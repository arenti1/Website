import React from "react";
import contactus from "../img/contactus.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactus})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
      
          <h2> Erwan Molina </h2>
          <h2> Email: erwan.molina@epitech.eu </h2>
          <h2> Whatsapp: +34 654 348 911 </h2>
        </div>
    </div>
  );
}

export default Contact;
