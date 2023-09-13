import "../css/header.css";
import "../App.css";
import AureTop from "../medias/h1-b.svg";
import AureBottom from "../medias/h1-bottom.svg";
import AureBottomBlack from "../medias/h1-bottom-black.svg";
import AureTopBlack from "../medias/h1-top-black.svg";
import { connect } from "react-redux";
import { toggleTheme } from "../redux/themeaction";

const Header = ({ isNightMode, toggleTheme }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className="h1container">
        <h1 className="selectDisable">
          <span className="spanTitle">
            AURÉLIE CEDIA
            <div
              className="aurelieTop"
              style={{
                backgroundImage: `url(${isNightMode ? AureTop : AureTopBlack})`,
              }}
            ></div>
          </span>
          <br />
          <span className="spanTitle">
            DÉVELOPPEUSE WEB
            <div
              className="aurelieBottom"
              style={{
                backgroundImage: `url(${
                  isNightMode ? AureBottom : AureBottomBlack
                })`,
              }}
            ></div>
          </span>
        </h1>
        <div className="hideh1"></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
