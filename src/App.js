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
  return (
    <div className={`App`}>
      <header>
      <HeaderNav/>
      </header>
     <Header/>
    
      <BioSection/>
      <ProjetSection/>
      <TapeCV/>
      <ContactSection/>
      <Footer/>
      {/* <div className={`${background&& "backgroundAnimation"}`}></div> */}
    </div>
    
  );
}

export default App;
