// src/SlidingCard.js
import React from 'react';

const SlidingCard = ({ title, content, imageUrl }) => {
  return (
    <div className="relative w-64 h-96 rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SlidingCard;
