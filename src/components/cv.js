import React from "react";
import { connect } from "react-redux";
import "../css/cv.css";
import cv from "../medias/AurelieCedia.pdf";
const Cv = ({ isNightMode }) => {
  return (
    <div className="cv-container-glow">
      <a
        target="_blank"
        rel="noreferrer"
        href={cv}
        className="glow-on-hover-cv"
        data={isNightMode ? "dark" : "light"}
      >
        <p>Télécharger mon CV</p>
      </a>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(Cv);
