import './App.css';
import './css/header.css';
import HeaderNav from './components/headerNav';
import Header from './components/header';
import BioSection from './components/bioSection';
import TapeCV from './components/tapecv';
import ProjetSection from './components/projetSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BtnCv from './components/btnCv';


class App extends React.Component {
  render() {
  const { isNightMode } = this.props;

  // const [background, setbackground] = useState(false);
  // useEffect(() => {
  //   // Animation sequence
  //   setTimeout(() => {
  //     setbackground(true);
  //   });
  //   setTimeout(() => {
  //     setbackground(false);
  //   }, 2000);
    
  // }, []);
  
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function handleScroll() {
  var slideInRightElements = document.querySelectorAll('.active');
  var slideInLeftElements = document.querySelectorAll('.activeLeft');

  slideInRightElements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in-right');
    }
  });
  slideInLeftElements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in-left');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
console.log(isNightMode)
  return (
    // <div className={`App`}>
  <div className={`App ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <style>
      </style>
      <header>
      <HeaderNav/>
      </header>
     <Header/>
    
      <BioSection/>
      <ProjetSection/>
      <BtnCv/>
      {/* <TapeCV/> */}
      <ContactSection/>
      <Footer/>
      {/* <div className={`${background&& "backgroundAnimation"}`}></div> */}
    </div>  
  )
  }
}

const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(App);




