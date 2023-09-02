
import { connect } from "react-redux";
import detourjaune from "../medias/detourjaune.png"
import "../App.css";
import "../css/biosection.css";
const BioSection = ({ isNightMode }) => {
    /**effet de l'image zoom */
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
    
        const zoomFactor = 0.02; 
        let scaleFactor = 1 + scrollPosition * zoomFactor;
        const maxScale = 5;
        if (scaleFactor > maxScale) {
            scaleFactor = maxScale;
        }
    
        // Appliquez l'agrandissement à l'image
        document.querySelector('.biophotodetour').style.transform = `scale(${scaleFactor})`;
    });
  return (
    <div
      className={`biosection ${
        isNightMode ? "night-mode-no-bg" : "day-mode-no-bg"
      }`}
    >
      <div className="slide-in photocontainer">
      <img
          className="biophotodetour selectDisable"
          src={detourjaune}
          alt="bio aurelie"
        />
        {/* <img
          className="biophoto selectDisable"
          src={AureWeb}
          alt="bio aurelie"
        />
        <div className="photohide"></div>
        <div className="photohide"></div>
        <div className="photohide"></div> */}
        {/* <div className="photohide"></div> */}
        {/* <div className="photohide"></div> */}
      </div>
      <p style={{ textAlign: "left" }} className="activeLeft textbio">
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
