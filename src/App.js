import './App.css';
import './css/header.css';
import HeaderNav from './components/headerNav';
import Header from './components/header';
import BioSection from './components/bioSection';
import TapeCV from './components/tapecv';
import ProjetSection from './components/projetSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
  const [background, setbackground] = useState(false);

  useEffect(() => {
    // Animation sequence
    setTimeout(() => {
      setbackground(true);
    });
    setTimeout(() => {
      setbackground(false);
    }, 2000);
    
  }, []);
  
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

  return (
    <div className={`App`}>
      <header>
      <HeaderNav/>
      </header>
     <Header/>
    
      <BioSection/>
      <ProjetSection/>
      {/* <TapeCV/> */}
      <ContactSection/>
      <Footer/>
      {/* <div className={`${background&& "backgroundAnimation"}`}></div> */}
    </div>  
    
  );
}

export default App;
