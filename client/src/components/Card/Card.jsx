import React, { useRef, useState } from "react";
import { InfoModal } from "../Modal/InfoModal";
import "./Card.css";

export function Card({ imageSrc, soundSrc, infoText }) {
  const audioRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleToggleExpand = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="card">
      <div className="card-content">
        <img src={imageSrc} alt="Animal" />
      </div>
      {isModalOpen && (
        <InfoModal infoText={infoText} onClose={() => setIsModalOpen(false)} />
      )}
      <div className="button-container">
        <button className="card-button" onClick={handlePlaySound}>
          Play Sound
        </button>
      </div>
      <audio ref={audioRef} src={soundSrc} />
      <button className="details-button" onClick={handleToggleExpand}>
        Show Details
      </button>
    </div>
  );
}
