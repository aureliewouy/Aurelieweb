import { useState } from "react";
import "../css/projetsection.css";
import "../App.css";
import tgdplatform from "../medias/platform.gif";
import coruscant from "../medias/coruscant.gif";
import axereal from "../medias/axereal.gif";
import rockPaper from "../medias/game.gif";
import Popup from "./popup";
import { ReactComponent as PlayBlue } from "../medias/play-button-blue.svg";
import { ReactComponent as Play } from "../medias/play-button.svg";
import { connect } from "react-redux";

const ProjetSection = ({ isNightMode }) => {
  const [popupImageUrl, setPopupImageUrl] = useState(null);

  const handleImageClick = (imageUrl) => {
    setPopupImageUrl(imageUrl);
  };

  const handleClosePopup = () => {
    setPopupImageUrl(null);
  };
  const allImg = [tgdplatform, coruscant, axereal, rockPaper];

  return (
    <>
      {popupImageUrl && (
        <Popup
          imageUrl={popupImageUrl}
          onClose={handleClosePopup}
          allImg={allImg}
        />
      )}
      <div className="projetsection">
        <h2
          style={{
            color: isNightMode ? " var(--cornsilk)" : " var(--purpledark)",
          }}
        >
          Mes projets
        </h2>
        <div className="caroussel">
          <div className="carousselContainer">
            <input
              type="radio"
              name="slider"
              id="item-1"
              defaultChecked={true}
            />
            <input type="radio" name="slider" id="item-2" />
            <input type="radio" name="slider" id="item-3" />
            <input type="radio" name="slider" id="item-4" />
            <div className="cards">
              <label className="cardProjet" htmlFor="item-1" id="projet-1">
                <img src={tgdplatform} alt="platform Thegreendata" />
              </label>
              <label className="cardProjet" htmlFor="item-2" id="projet-2">
                <img src={coruscant} alt="coruscant website" />
              </label>
              <label className="cardProjet" htmlFor="item-3" id="projet-3">
                <img src={axereal} alt="axereal website" />
              </label>
              <label className="cardProjet" htmlFor="item-4" id="projet-4">
                <img src={rockPaper} alt="rock paper scissors website" />
              </label>
            </div>
            <div className="player">
              <div
                className={`upper-part ${
                  isNightMode ? "backgroundNightmode" : "backgroundDaymode"
                }`}
              >
                <div
                  className={`info-area ${
                    isNightMode ? "backgroundNightmode" : "backgroundDaymode"
                  }`}
                  id="test"
                >
                  <label className="projet-info" id="projet-info-1">
                    <div className="title">Platform Thegreendata</div>
                    <div
                      className={`seemore ${!isNightMode && "seemoreWhite"}`}
                      onClick={() => handleImageClick(tgdplatform)}
                    >
                      {isNightMode ? (
                        <Play className="playicon" />
                      ) : (
                        <PlayBlue className="playicon" />
                      )}
                    </div>
                    {/* </div> */}
                  </label>
                  <label className="projet-info" id="projet-info-2">
                    <div className="title">Coruscant</div>
                    <div
                      className={`seemore ${!isNightMode && "seemoreWhite"}`}
                      onClick={() => handleImageClick(coruscant)}
                    >
                      {isNightMode ? (
                        <Play className="playicon" />
                      ) : (
                        <PlayBlue className="playicon" />
                      )}
                    </div>
                  </label>
                  <label className="projet-info" id="projet-info-3">
                    <div className="title">Copilote</div>
                    <div
                      className={`seemore ${!isNightMode && "seemoreWhite"}`}
                      onClick={() => handleImageClick(axereal)}
                    >
                      {isNightMode ? (
                        <Play className="playicon" />
                      ) : (
                        <PlayBlue className="playicon" />
                      )}
                    </div>
                  </label>
                  <label className="projet-info" id="projet-info-4">
                    <div className="title">Pierre feuille ciseaux</div>
                    <div
                      className={`seemore ${!isNightMode && "seemoreWhite"}`}
                      onClick={() => handleImageClick(rockPaper)}
                    >
                      {isNightMode ? (
                        <Play className="playicon" />
                      ) : (
                        <PlayBlue className="playicon" />
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  isNightMode: state.isNightMode,
});

export default connect(mapStateToProps)(ProjetSection);
