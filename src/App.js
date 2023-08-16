import './App.css';
import HeaderNav from './components/headerNav';
import Header from './components/header';
import BioSection from './components/bioSection';
import TapeCV from './components/tapecv';
import ProjetSection from './components/projetSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
      <HeaderNav/>
      </header>
      <Header/>
      <BioSection/>
      <TapeCV/>
      <ProjetSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
