// components/Modal.js

import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Order Complete!</h2>
        <p>Your order has been placed successfully.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
