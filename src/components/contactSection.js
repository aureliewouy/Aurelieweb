import "../css/contact.css";
import React from "react";
import CardGrab from "./card";

function ContactSection() {
  return (
    <div className="contactsection">
      <h2 style={{ zIndex: 2, position: "relative" }}>
        <CardGrab position={10} deg={-18} bottom={-2} />
        <CardGrab position={40} deg={-3} bottom={-1} />
        <span>GET IN TOUCH</span>
      </h2>
      <CardGrab position={70} deg={10} bottom={10} zIndex black />
    </div>
  );
}
export default ContactSection;
