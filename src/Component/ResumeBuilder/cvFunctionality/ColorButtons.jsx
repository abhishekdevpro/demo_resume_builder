
import React from 'react';

const ColorButtons = ({ setBoxBgColor }) => (
  <div className=" hidden md:flex justify-around gap-2 ">
    <button
      className="bg-gray-100 hover:bg-gray-100 text-white font-bold p-4 h-3 rounded-full text-xs"
      onClick={() => setBoxBgColor('lightgray') }
    ></button>
    <button
      className="bg-green-200 hover:bg-green-100 text-white font-bold p-4 h-3 rounded-full"
      onClick={() => setBoxBgColor('#F0FFF0')}
    ></button>
    <button
      className="bg-yellow-100 hover:bg-yellow-200 text-white font-bold p-4 h-3 rounded-full"
      onClick={() => setBoxBgColor('#FFFACD')}
    ></button>
    <button
      className="bg-pink-300 hover:bg-pink-200 text-white font-bold p-4 h-3 rounded-full"
      onClick={() => setBoxBgColor('#FFEBEF')}
    ></button>
    <button
      className="bg-sky-300 hover:bg-sky-200 text-white font-bold p-4 h-3 rounded-full"
      onClick={() => setBoxBgColor('#42f5f5')}
    ></button>
    <button
      className="bg-blue-600 hover:bg-blue-500 text-white font-bold p-4 h-3 rounded-full"
      onClick={() => setBoxBgColor('#6c42f5')}
    ></button>
    <button
      className="bg-pink-700 hover:bg-pink-600 text-white font-bold p-4 h-3 rounded-full"
      onClick={() => setBoxBgColor('#f54278')}
    ></button>
  </div>
);

export default ColorButtons;
