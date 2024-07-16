import React from 'react';
import shoeImage from '/shoeImage.png';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex flex-col items-center mt-6 text-center p-4 md:p-12">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-blue-500">Enjoy</span> every step you take
        </h1>
        <p className="text-lg md:text-xl mt-6 max-w-2xl">
          Explore our collection of trendy and high-quality sneakers designed to elevate your everyday look. Unlock your style potential with our range of sneakers that blend fashion and functionality seamlessly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-4 md:p-12">
          <div className="text-center z-10">
            <div className="mt-8">
              <p className="text-lg md:text-xl">Size available</p>
              <div className="flex justify-center space-x-2 mt-2">
                {[37, 38, 39, 40, 41, 42, 43, 44, 45, 46].map(size => (
                  <button key={size} className="px-3 py-1 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <Link to='/collection'>
              <button className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Open shop
              </button></Link>

            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl">🥿</span>
                <p className="mt-2">Light & Comfortable</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl">👟</span>
                <p className="mt-2">Stylish Design</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl">♨️</span>
                <p className="mt-2">Breathable Materials</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-black">
          <img src={shoeImage} alt="Sneaker" className="h-full max-w-xs md:max-w-md lg:max-w-lg object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Home;
