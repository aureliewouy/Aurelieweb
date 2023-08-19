import '../css/contact.css';
import React from 'react'
import CardGrab from './card';


function ContactSection() {
    return (
        <div className="contactsection activeLeft">
    <h2 style={{zIndex:2, position:'relative'}}>
      <CardGrab position={10} deg={-18} bottom={-50}/>
      <CardGrab position={40} deg={-3}  bottom={-10} />
      <span>GET IN TOUCH</span>
  </h2>
      <CardGrab position={70} deg={10}  bottom={90} zIndex black/>  
        </div>
    );
}
export default ContactSection