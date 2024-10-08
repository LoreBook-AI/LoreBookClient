import React from 'react';
import { assets } from '../../assets/assets';

const classes = [
  { name: "Bard", icon: assets.sword_icon },
  { name: "Cleric", icon: assets.sword_icon },
  { name: "Druid", icon: assets.sword_icon },
  { name: "Fighter", icon: assets.sword_icon },
  { name: "Monk", icon: assets.sword_icon },
  { name: "Paladin", icon: assets.sword_icon },
  { name: "Ranger", icon: assets.sword_icon },
  { name: "Rogue", icon: assets.sword_icon },
  { name: "Sorcerer", icon: assets.sword_icon },
  { name: "Warlock", icon: assets.sword_icon },
  { name: "Wizard", icon: assets.sword_icon },
  { name: "Barbarian", icon: assets.sword_icon },
  { name: "Artificer", icon: assets.sword_icon },
];

const Main = () => {
  return (
    <div className="flex flex-col flex-grow p-4 bg-gradient-to-r from-green-800 to-brown-700 text-white">
      <div className="flex items-center justify-between text-gold text-2xl p-5">
        <p></p>
        <img src={assets.user_icon} alt="User Icon" className="w-10 rounded-full" />
      </div>
      <div className="mx-auto w-full flex-grow">
        <div className="flex items-center justify-center mb-5">
          <img src={assets.dragon_icon} alt="Dragon Icon" className="w-12 h-12 mr-2" />
          <h2 className="text-4xl text-gold">Escolha a classe do personagem</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 p-0">
          {classes.slice(0, 11).map((classItem, index) => {
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center w-full h-full bg-stoneGray rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <img 
                  src={classItem.icon} 
                  alt={classItem.name} 
                  className="w-24 h-24 mb-2"
                  onError={(e) => { e.target.onerror = null; e.target.src = ''; }}
                />
                <p className="text-center text-sm text-gray-200">{classItem.name}</p>
              </div>
            );
          })}
          <div className="flex flex-col items-center justify-center w-full h-full bg-stoneGray rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200">
            <img 
              src={classes[12].icon} 
              alt={classes[12].name} 
              className="w-24 h-24 mb-2"
              onError={(e) => { e.target.onerror = null; e.target.src = ''; }}
            />
            <p className="text-center text-sm text-gray-200">{classes[12].name}</p>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <svg className="w-4 h-4 me-2" aria-hidden="true" focusable="false" xmlns="c" viewBox="0 0 320 512">
              <path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
            </svg>
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
