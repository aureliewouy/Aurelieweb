import React, { useState } from "react";
import "../css/popup.css";
import Next from "../medias/right.svg";
import Back from "../medias/left.svg";
import { projectsEnglish, projectsFrench } from "./traductionText";
import { connect } from "react-redux";

const Popup = ({ imageUrl, onClose, allImg, isFrenchMode }) => {
  const [currentimg, setCurrentimg] = useState(imageUrl);
  const handleClick = (e) => {
    e.stopPropagation();
  };
  let currentIndex = allImg.findIndex((e) => e === currentimg);
  const getNextImage = () => {
    const nextIndex = (currentIndex + 1) % allImg.length;
    const nextImage = allImg[nextIndex];
    currentIndex = nextIndex;
    return nextImage;
  };
  const getpreviousImage = () => {
    const previousIndex = (currentIndex - 1 + allImg.length) % allImg.length;

    const previousImage = allImg[previousIndex];
    currentIndex = previousIndex;

    return previousImage;
  };
  const handleImg = () => {
    setCurrentimg(getNextImage());
  };
  const handlePreviousImg = () => {
    setCurrentimg(getpreviousImage());
  };

  return (
    <div className="popup-container" onClick={onClose}>
      <div className="popup-content" onClick={handleClick}>
        <img src={currentimg} className="image" alt="bigger" />
        <div className="lecteur">
          <div className="projectDescription">
            {isFrenchMode
              ? projectsFrench[currentIndex]
              : projectsEnglish[currentIndex]}
          </div>
          <div className={"nextback"} style={{}}>
            <div onClick={handlePreviousImg}>
              <img src={Back} alt="back" className="playerIcon" />
            </div>

            <div onClick={handleImg}>
              {" "}
              <img src={Next} alt="next" className="playerIcon" />
            </div>

            {/* <div onClick={onClose}>Fermer</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFrenchMode: state.isFrenchMode,
});

export default connect(mapStateToProps)(Popup);
