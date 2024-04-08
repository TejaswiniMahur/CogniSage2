import React from "react";
import { Card } from "../../components/Card/Card";
import { animalData } from "../../meta/animals";
import { Link } from 'react-router-dom';

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
      
      <div className="flex justify-center mt-3 py-4 ">
      <Link to = '/animal-quiz'>
        <button className="bg-green-500 hover:bg-green-600 text-white  text-xl py-2 px-4 rounded-full flex items-center">
          Go to quiz!
        </button>
        </Link>
        </div>
      
    </div>
    
    
  );
}

export default AnimalSound;