import React from "react";
import { Card } from "../../components/Card/Card";
import { animalData } from "../../meta/animals";

function AnimalSound() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {animalData.map((animal, index) => (
        <Card
          key={index}
          imageSrc={animal.icon}
          soundSrc={animal.sound}
          infoText={animal.infoText}
        />
      ))}
    </div>
  );
}

export default AnimalSound;