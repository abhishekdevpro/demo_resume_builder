// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-300 rounded-md p-4 w-1/3">
        <button onClick={onClose} className="float-right rounded-full px-4 py-2 bg-slate-400">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
