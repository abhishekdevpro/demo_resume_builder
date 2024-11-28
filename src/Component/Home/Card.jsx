import React from 'react';

const Card = ({ image, title, name, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-white m-4">
        <div className=' flex justify-around py-4'>
        <div>
        <div className="font-bold text-xl">{title}
        </div>
        <div className=' text-gray-700 text-lg'>{name}</div>
        </div>
      
      <img className="w-10 h-10 rounded-full" src={image} alt={title} />
        </div>

            <div className="px-6 py-4">
        
        <p className="text-gray-700 text-lg text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
