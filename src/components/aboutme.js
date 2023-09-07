import { connect } from "react-redux";
import "../App.css";
import "../css/aboutme.css";
const Aboutme = ({ isNightMode }) => {
  return (
    <div
      className={`aboutme ${
        isNightMode ? "night-mode-no-bg" : "day-mode-no-bg"
      }`}
    >
      <p>
        J'ai été formée à Holberton School, ou j'ai passé mes journées à
        résoudre des problèmes informatiques tout en jonglant avec des projets
        passionnants.
      </p>
      <p>
        Mais avant, j'ai décroché un master en Cultures et Métiers du Web à
        l'UPEM me permettant de toucher un peu à tout (vidéo, ux-design,
        front-end). Là-bas, j'ai créé un site WordPress et même un
        web-documentaire interactif. On avait prévu de le faire en Corée, mais
        le COVID a décidé de jouer les trouble-fête ! 🦠😅
      </p>
      <p>
        Lors de mon passage chez TheGreenData en tant que développeuse Full
        Stack, j'ai mis une touche de style dans leur logiciel en utilisant
        React.js et Typescript pour la partie front-end, tandis que pour le
        back-end, j'ai jonglé entre Python, Flask, Postgres (ou parfois FastAPI
        et MongoDB). J'ai même plongé dans le monde de la gestion
        d'infrastructures et du déploiement en faisant équipe avec Microsoft
        Azure et les actions de Github.
      </p>
      <p>
        Bienveillante, ouverte d'esprit et tolérante, j'ai une soif
        inextinguible d'apprendre. En dehors de cela, je pratique régulièrement
        le sport pour rester en forme, et je trouve un véritable bonheur dans le
        monde des jeux vidéo. 🎮🐍
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(Aboutme);
