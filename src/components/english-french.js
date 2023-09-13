import { connect } from "react-redux";
import "../css/footer.css";
import { toggleLanguage } from "../redux/themeaction";

const EnglishFrench = ({ isFrenchMode, isNightMode, toggleLanguage }) => {
  return (
    <div className="langues">
      <button
        className={!isNightMode && "day-mode-no-bg"}
        onClick={!isFrenchMode ? toggleLanguage : null}
      >
        Fr
        <span style={{ opacity: isFrenchMode ? "1" : "0" }}></span>
        <span style={{ opacity: isFrenchMode ? "1" : "0" }}></span>
      </button>
      |
      <button
        className={!isNightMode && "day-mode-no-bg"}
        onClick={isFrenchMode ? toggleLanguage : null}
      >
        En
        <span style={{ opacity: !isFrenchMode ? "1" : "0" }}></span>
        <span style={{ opacity: !isFrenchMode ? "1" : "0" }}></span>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isFrenchMode: state.isFrenchMode,
  isNightMode: state.isNightMode,
});

const mapDispatchToProps = {
  toggleLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnglishFrench);
