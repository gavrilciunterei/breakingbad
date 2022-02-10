import React from 'react';

function CharacterInfo({ title, text }) {
  return (
    <div className="flex items-center">
      <h1>
        {title}: {typeof text === 'object' ? text.join(', ') : text}
      </h1>
    </div>
  );
}

export default CharacterInfo;
