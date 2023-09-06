import "../css/header.css";
import "../App.css";
import AureTop from "../medias/h1-top.svg";
import AureBottom from "../medias/h1-bottom.svg";
import { connect } from "react-redux";
import { toggleTheme } from "../redux/themeaction";

const Header = ({ isNightMode, toggleTheme }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className="h1container">
        <h1 className="selectDisable">
          <span className="spanTitle">AURÉLIE CEDIA</span>
          <br />
          <span>DÉVELOPPEUSE WEB</span>
          {/* <div style={{width:'70vw'}} >
             {isNightMode? 
              <img className="aureWeb selectDisable" src={Aure} alt='Aurélie CEDIA transparent'/>:
              <img className="aureWeb selectDisable" src={AureDark} alt='Aurélie CEDIA transparent'/>}
              
              </div>  */}
        </h1>
        <div className="hideh1"></div>
      </div>
      <div
        className="aurelieTop"
        style={{ backgroundImage: `url(${AureTop})` }}
      >
        {" "}
      </div>
      <div
        className="aurelieBottom"
        style={{ backgroundImage: `url(${AureBottom})` }}
      ></div>
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
