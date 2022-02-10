import React from 'react';

function Quote({ text }) {
  return (
    <div className="mt-12 max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow">
      <div className="mb-2">
        <div className="h-3 text-3xl text-left text-gray-600">“</div>
        <p className="px-4 text-sm text-center text-gray-600">{text}</p>
        <div className="h-3 text-3xl text-right text-gray-600">”</div>
      </div>
    </div>
  );
}

export default Quote;
