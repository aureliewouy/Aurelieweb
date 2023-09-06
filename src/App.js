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
  // Attacher l'événement scroll après un délai de 2 secondes
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", scrollHandler);
    const scrollTimeout = setTimeout(() => {
      window.removeEventListener("scroll", scrollHandler);
    }, 3800);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  // Ajout d'animation au scroll
  function handleScroll() {
    var slideInRightElements = document.querySelectorAll(".active");
    var slideInLeftElements = document.querySelectorAll(".activeLeft");

    slideInRightElements.forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add("slide-in-right");
      }
    });
    slideInLeftElements.forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add("slide-in-left");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
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
