import React from "react";
import "./InfoModal.css";

export const InfoModal = ({ infoText, onClose }) => {
  const processedInfo = infoText
    .split("- ")
    .map((item, index) => <p key={index}>{item}</p>);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {processedInfo}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
