import React, { useState } from "react";
import "../css/popup.css";

const Popup = ({ imageUrl, onClose, allImg }) => {
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
        <img src={currentimg} alt="bigger" />
        <button onClick={onClose}>Fermer</button>
        <button onClick={handleImg}>Suivant</button>
        <button onClick={handlePreviousImg}>Précedent</button>
      </div>
    </div>
  );
};

export default Popup;
