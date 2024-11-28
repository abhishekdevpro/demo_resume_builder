import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-2 h-[700px] rounded-xl shadow-xl p-4 w-11/12 max-w-2xl">
        <button
          onClick={onClose}
          className="text-black border text-right border-blue-950 rounded font-bold p-1 w-fit"
        >
          close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
