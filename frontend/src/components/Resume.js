import React from 'react';

function Resume({ onBackClick }) {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">You found it!</h1>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src="/CIA.png" alt="Resume" className="w-auto" />
      </div>
      <button
        onClick={onBackClick}
        className="bg-purple-600 text-white p-2 mt-5"
      >
        Back to those handsome photos of me ;)
      </button>
    </div>
  );
}

export default Resume;
