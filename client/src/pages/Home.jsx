import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/atmosphere of the earth (2).png';
import image2 from '../assets/balanced diet (1).png';
import image3 from '../assets/layers of earth (1).png';
import image4 from '../assets/shapes (1).png';
import image5 from '../assets/Solar System Style (1).png';
import image6 from '../assets/sounds of animals (1).png';


export default function Home() {
  return (
    <section className="min-h-screen bg-cover bg-gradient-to-r  from-yellow-200 to-blue-500">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 py-20">
        <h2 className="text-2xl font-semibold md:text-3xl text-center  mb-4">HEY KIDS!!</h2>
        <p className="text-center  mb-8">WELCOME TO COGNISAGE</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to = '/atmosphere'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image1} alt="Image 1" className="w-full h-40 object-cover" />
          </div>
          </Link>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image2} alt="Image 2" className="w-full h-40 object-cover" />
          </div>
          <Link to = '/earth'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image3} alt="Image 3" className="w-full h-40 object-cover" />
          </div>
          </Link>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image4} alt="Image 4" className="w-full h-40 object-cover" />
          </div>
          <Link to = '/planets'>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image5} alt="Image 5" className="w-full h-40 object-cover" />
          </div>
          </Link>
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-110">
            <img src={image6} alt="Image 6" className="w-full h-40 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
