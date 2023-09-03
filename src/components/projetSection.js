import { useState } from "react";
import "../css/projetsection.css";
import tgdplatform from "../medias/platform.gif";
import coruscant from "../medias/coruscant.gif";
import axereal from "../medias/axereal.gif";
import rockPaper from "../medias/game.gif";
import Popup from "./popup";
function ProjetSection() {
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
      <div className="projetsection active" style={{ marginBottom: "200px" }}>
        <h2>Mes réalisations</h2>
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
              <div className="upper-part">
                <div className="info-area" id="test">
                  <label className="projet-info" id="projet-info-1">
                    <div className="title">Platform Thegreendata</div>
                    <button
                      className="seemore"
                      onClick={() => handleImageClick(tgdplatform)}
                    >
                      Voir plus
                    </button>
                  </label>
                  <label className="projet-info" id="projet-info-2">
                    <div className="title">Coruscant</div>
                    <button
                      className="seemore"
                      onClick={() => handleImageClick(coruscant)}
                    >
                      Voir plus
                    </button>
                  </label>
                  <label className="projet-info" id="projet-info-3">
                    <div className="title">Axéréal</div>
                    <button
                      className="seemore"
                      onClick={() => handleImageClick(axereal)}
                    >
                      Voir plus
                    </button>
                  </label>
                  <label className="projet-info" id="projet-info-4">
                    <div className="title">Pierre feuille ciseaux</div>
                    <button
                      className="seemore"
                      onClick={() => handleImageClick(rockPaper)}
                    >
                      Voir plus
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjetSection;
