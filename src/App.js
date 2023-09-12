import "./App.css";
import "./css/header.css";
import HeaderNav from "./components/headerNav";
import Header from "./components/header";
import BioSection from "./components/bioSection";
import ProjetSection from "./components/projetSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footer";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Aboutme from "./components/aboutme";

function App({ isNightMode }) {
  useEffect(() => {
    //Toujours être en haut de la page
    window.scrollTo(0, 0);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    // Animation onSroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(
      ".hiddenTranslate, .hiddenOpacity, .slideX-left",
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  // Attacher l'événement scroll après un délai de 2 secondes
  // useEffect(() => {
  //   const scrollHandler = () => {
  //     window.scrollTo(0, 0);
  //   };
  //   window.addEventListener("scroll", scrollHandler);
  //   const scrollTimeout = setTimeout(() => {
  //     window.removeEventListener("scroll", scrollHandler);
  //   }, 3800);

  //   return () => {
  //     clearTimeout(scrollTimeout);
  //     window.removeEventListener("scroll", scrollHandler);
  //   };
  // }, []);

  return (
    <div className={`App ${isNightMode ? "night-mode" : "day-mode"}`}>
      <div className="nightrevealContainer">
        <div className="nightreveal"></div>
        <div className="nightreveal"></div>
        <div className="nightreveal"></div>
        <div className="nightreveal"></div>
        <div className="nightreveal"></div>
      </div>
      <header>
        <HeaderNav />
      </header>
      <Header />
      <BioSection />
      <ProjetSection />
      <Aboutme />
      <ContactSection />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(App);
