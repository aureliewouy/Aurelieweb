import { connect } from "react-redux";
import "../css/aboutme.css";
import "../App.css";
import { ReactComponent as Circle } from "../medias/circle.svg";
import holberton from "../medias/holberton.png";
import thegreendata from "../medias/thegreendata.jpeg";
import me from "../medias/aurelie.jpeg";
import upem from "../medias/upem.png";
import js from "../medias/js.png";
import python from "../medias/python.png";
import aurecam from "../medias/aurecam.png";
import bodo from "../medias/bodo.gif";
import c from "../medias/c.png";
import Cv from "./cv";
import { textEnglishCmw, textEnglishHolberton, textEnglishMe, textEnglishTgd, textFrenchCmw, textFrenchHolberton, textFrenchMe, textFrenchTgd } from "./traductionText";
const Aboutme = ({ isNightMode, isFrenchMode }) => {
  return (
    <div
      className={`aboutme ${
        isNightMode ? "night-mode-no-bg" : "day-mode-no-bg"
      }`}
    >
      <p
        style={{
          fontSize: "8vw",
          color: "var(--cornsilk)",
          marginBottom: "15%",
          textAlign: "center",
          fontFamily: "Kabel",
        }}
      >
        {isFrenchMode ? "À propos de moi":"About me"}
      </p>
      <div className="colorBorder"></div>
      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={holberton} alt="holberton school" />
      </div>
      <div className="hiddenTranslate containerText">
      {isFrenchMode ? textFrenchHolberton : textEnglishHolberton}
      </div>
      <div className={`holberton ${!isNightMode && "holbertonBlack"}`}>
        <div className="slideX-left">
          <img src={c} alt="c language" />
          <p>C</p>
        </div>
        <div className="slideX-left">
          <img src={python} alt="python language" />
          <p>Python</p>
        </div>
        <div className="slideX-left">
          <img src={js} alt="javascript" />
          <p>JavaScript</p>
        </div>
      </div>
      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={upem} alt="Upem Gustave Eiffel" />
      </div>

      <div className="hiddenTranslate containerText">
        {isFrenchMode ? textFrenchCmw : textEnglishCmw}
      </div>
      <div className="me">
        <img src={bodo} alt="Ligue bodo projet" />
      </div>

      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={thegreendata} alt="thegreendata logo" />
      </div>
      <div className="hiddenTranslate containerText">
        {isFrenchMode ? textFrenchTgd : textEnglishTgd}
      </div>
      <div className="me">
        <img src={aurecam} alt="me" />
      </div>
      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={me} alt="about me" />
      </div>

      <div className="hiddenTranslate containerText">
        {isFrenchMode ? textFrenchMe : textEnglishMe}
      </div>
      <div
        className="glow-on-hover-about"
        data={isNightMode ? "dark" : "light"}
      >
        <Cv />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
  isFrenchMode: state.isFrenchMode
});

export default connect(mapStateToProps)(Aboutme);
