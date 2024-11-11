// CustomToast.js
import React from 'react';

const CustomToast = ({ message, onClose, type }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-12 right-14 p-4 rounded-lg shadow-lg flex items-center justify-between ${bgColor} text-white`}>
      <span className="text-lg font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 bg-transparent text-white hover:text-gray-300 focus:outline-none"
      >
        ✕
      </button>
    </div>
  );
};

export default CustomToast;
