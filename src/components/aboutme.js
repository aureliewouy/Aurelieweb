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
import c from "../medias/c.png";
const Aboutme = ({ isNightMode }) => {
  return (
    <div
      className={`aboutme ${
        isNightMode ? "night-mode-no-bg" : "day-mode-no-bg"
      }`}
    >
      <p
        style={{
          fontSize: "6em",
          color: "var(--cornsilk)",
          marginBottom: "15%",
        }}
      >
        À propos de moi
      </p>
      <div className="colorBorder"></div>
      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={holberton} alt="holberton school" />
      </div>
      <div className="hiddenTranslate containerText">
        <p className="textAboutme" style={{ marginBottom: "10%" }}>
          J'ai été formée à Holberton School, ou j'ai passé mes journées à
          résoudre des problèmes informatiques tout en jonglant avec des projets
          passionnants.
        </p>
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
        <img src={upem} alt="holberton school" />
      </div>

      <div className="hiddenTranslate containerText">
        <p className="textAboutme">
          Mais avant, j'ai décroché un master en Cultures et Métiers du Web à
          l'UPEM me permettant de toucher un peu à tout (vidéo, ux-design,
          developpement web). Là-bas, j'ai créé un site WordPress et même un{" "}
          <a
            href="https://app.racontr.com/projects/2020-ligue-bodo/"
            target="_blank"
            rel="noreferrer"
          >
            web-documentaire
          </a>{" "}
          interactif. On avait prévu de le faire en Corée, mais le COVID a
          décidé de jouer les trouble-fête ! 🦠😅
        </p>
      </div>
      <div className="me juggle hiddenTranslate">
        <img src={aurecam} alt="all tech" />
        {/* <Lottie 
	    options={defaultOptions}
      speed="0.8"
        width={"90%"}
      /> */}
      </div>

      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={thegreendata} alt="thegreendata logo" />
      </div>
      <div className="hiddenTranslate containerText">
        <p className="textAboutme">
          Lors de mon passage chez TheGreenData en tant que développeuse Full
          Stack, j'ai apporté une touche de style à leur logiciel en utilisant
          React.js et Typescript pour la partie front-end, tandis que pour le
          back-end, j'ai jonglé entre Python, Flask, Postgres (ou parfois
          FastAPI et MongoDB). J'ai même plongé dans le monde de la gestion
          d'infrastructures et du déploiement en faisant équipe avec Microsoft
          Azure et les actions de Github.
        </p>
      </div>
      <div className="me">
        <img src={aurecam} alt="me" />
      </div>
      <div className={`loading ${!isNightMode && "loadingBlack"}`}>
        <Circle />
      </div>
      <div className="logoAboutme">
        <img src={me} alt="holberton school" />
      </div>

      <div className="hiddenTranslate containerText">
        <p className="textAboutme ">
          Bienveillante, ouverte d'esprit et tolérante, j'ai une soif
          inextinguible d'apprendre. En dehors de cela, je pratique
          régulièrement le sport pour rester en forme, et je trouve un véritable
          bonheur dans le monde des jeux vidéo. 🎮
        </p>
      </div>
      <div className="colorBorderBottom">
        <div className="colorBorderfinal"></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(Aboutme);
