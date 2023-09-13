import AureWeb from "../medias/aurebeige.png";
import { connect } from "react-redux";

import "../App.css";
import "../css/biosection.css";
const BioSection = ({ isNightMode, isFrenchMode }) => {
  const frenchText =
    "Hey, je suis Aurélie j'ai 28 ans et j'habite à Paris. Mon expérience en startup a duré plus d'un an, en fullstack et devops. Imaginez, je touchais à tout, même à la machine à café. Mais, révélation ! J'ai un faible pour le front-end. Alors devine où je m'oriente maintenant ? Tout droit vers ce terrain captivant ! 😉";
  const englishText =
    "Hey, I'm Aurélie, I'm 28 years old, and I live in Paris. My experience in startups lasted for more than a year, covering full-stack and DevOps. Picture this; I did a bit of everything, even handling the coffee machine. But, here's the revelation! I have a soft spot for front-end development. So, guess where I'm heading now? Straight into this exciting domain! 😉";
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
      </div>
      <p>{isFrenchMode ? frenchText : englishText}</p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
  isFrenchMode: state.isFrenchMode,
});

export default connect(mapStateToProps)(BioSection);
