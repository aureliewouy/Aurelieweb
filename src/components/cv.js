import React from "react";
import { connect } from "react-redux";
import "../css/cv.css";
import cv from "../medias/AurelieCedia.pdf";
import cvEn from "../medias/AurelieCedia_vie_en.pdf";
const Cv = ({ isNightMode, isFrenchMode }) => {
  return (
    <div className="cv-container-glow">
      <a
        target="_blank"
        rel="noreferrer"
        href={isFrenchMode ? cv : cvEn}
        className="glow-on-hover-cv"
        data={isNightMode ? "dark" : "light"}
      >
        <p>{isFrenchMode ? "Télécharger mon CV" : "Download my CV"}</p>
      </a>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
  isFrenchMode: state.isFrenchMode,
});

export default connect(mapStateToProps)(Cv);
