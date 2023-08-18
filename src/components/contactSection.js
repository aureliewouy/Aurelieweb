import '../css/contact.css';
import React from 'react'
import CardGrab from './card';


function ContactSection() {
    return (
        <div className="contactsection">
    <h2>
      <CardGrab position={10} deg={-18} bottom={-50}/>
      <CardGrab position={40} deg={-3}  bottom={-10} black/>
      <CardGrab position={70} deg={10}  bottom={-78} zIndex/>  
      <span>GET IN TOUCH</span>
  </h2>
        </div>
    );
}
export default ContactSection