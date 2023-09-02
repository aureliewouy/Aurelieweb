import { useState } from "react";
import "../css/projetsection.css";
import tgdplatform from "../medias/platform.gif";
import coruscant from "../medias/coruscant.gif";
import axereal from "../medias/axereal.gif";
import rockPaper from "../medias/game.gif";
import Popup from "./popup";
function ProjetSection() {
  const [isBlue, setIsBlue] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState(null);

  const handleImageClick = (imageUrl) => {
    setPopupImageUrl(imageUrl);
  };

  const handleClosePopup = () => {
    setPopupImageUrl(null);
  };
  const handleInputChange = () => {
    setIsBlue(!isBlue);
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
              onChange={handleInputChange}
            />
            <input
              type="radio"
              name="slider"
              id="item-2"
              onChange={handleInputChange}
            />
            <input
              type="radio"
              name="slider"
              id="item-3"
              onChange={handleInputChange}
            />
            <input
              type="radio"
              name="slider"
              id="item-4"
              onChange={handleInputChange}
            />
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
                    <div className="sub-line">
                      <div className="subtitle">
                        Calcul de l'impact carbonne de l'alimentation
                      </div>
                      <div
                        className="voirplusbtn"
                        onClick={() => handleImageClick(tgdplatform)}
                      >
                        <p>Voir plus</p>
                      </div>
                    </div>
                  </label>
                  <label className="projet-info" id="projet-info-2">
                    <div className="title">Coruscant</div>
                    <div className="sub-line">
                      <div className="subtitle">Projection des récoltes</div>
                      <div
                        className="voirplusbtn"
                        onClick={() => handleImageClick(coruscant)}
                      >
                        <p>Voir plus</p>
                      </div>
                    </div>
                  </label>
                  <label className="projet-info" id="projet-info-3">
                    <div className="title">Axéréal</div>
                    <div className="sub-line">
                      <div className="subtitle">Projection des récoltes</div>
                      <div
                        className="voirplusbtn"
                        onClick={() => handleImageClick(axereal)}
                      >
                        <p>Voir plus</p>
                      </div>
                    </div>
                  </label>
                  <label className="projet-info" id="projet-info-4">
                    <div className="title">Pierre feuille ciseaux</div>
                    <div className="sub-line">
                      <div className="subtitle">Projet perso d'un jeux</div>
                      <div
                        className="voirplusbtn"
                        onClick={() => handleImageClick(rockPaper)}
                      >
                        <p>Voir plus</p>
                      </div>
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
}
export default ProjetSection;
