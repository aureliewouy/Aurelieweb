import { ReactComponent as Logo } from "../medias/logo-web.svg";
import { ReactComponent as LogoDark } from "../medias/logo-dark.svg";
import "../css/header.css";
import "../App.css";
import { connect } from "react-redux";
import { toggleTheme } from "../redux/themeaction";
import cv from "../medias/AurelieCedia.pdf";
const HeaderNav = ({ isNightMode, isFrenchMode, toggleTheme }) => {
  return (
    <nav className="slide-in-top headerNav">
      <div>
        {isNightMode ? (
          <Logo className="logo" />
        ) : (
          <LogoDark className="logo" />
        )}
      </div>
      <div
        className={`clickable ${
          isNightMode ? "night-mode-no-bg" : "day-mode-no-bg"
        }`}
      >
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/aureliewouy"
            className="cutlink"
            data-content="Github"
          >
            <span className="cutlink-inner">Github</span>
          </a>
          <p>•</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/aurelie-cedia-060248182"
            className="cutlink"
            data-content="Linkedin"
          >
            <span className="cutlink-inner">Linkedin</span>
          </a>
        </div>
        <button className="glow-on-hover" onClick={toggleTheme}>
          {isNightMode ? "Light mode" : " Dark mode"}
        </button>
        <div className="lastpart">
          <a href={cv} target="_blank" rel="noreferrer">
            {isFrenchMode ? "TELECHARGER MON CV" : "DOWNLOAD MY CV"}
          </a>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
  isFrenchMode: state.isFrenchMode,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
