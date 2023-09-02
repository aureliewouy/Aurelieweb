import AureWeb from "../medias/aureliebeige.png";
import { connect } from "react-redux";

import "../App.css";
import "../css/biosection.css";
const BioSection = ({ isNightMode }) => {
  return (
    <div
      className={`biosection ${
        isNightMode ? "night-mode-no-bg" : "day-mode-no-bg"
      }`}
    >
      <div className="slide-in photocontainer">
        <img
          className="biophoto selectDisable"
          src={AureWeb}
          alt="bio aurelie"
        />
        <div className="photohide"></div>
        <div className="photohide"></div>
        <div className="photohide"></div>
        {/* <div className="photohide"></div> */}
        {/* <div className="photohide"></div> */}
      </div>
      <p style={{ textAlign: "left" }} className="activeLeft">
        {" "}
        Hey, je suis Aurélie j'ai 28 ans et j'habite à Paris.
        <br />
        Mon expérience en startup a duré plus d'un an, en fullstack et devops.
        Imaginez, je touchais à tout, même à la machine à café. Mais, révélation
        ! J'ai un faible pour le front-end. Alors devine où je m'oriente
        maintenant ? Tout droit vers ce terrain captivant ! 😉
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(BioSection);
