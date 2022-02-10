import React from 'react';

function SimpleButton({ text, action }) {
  return (
    <div className="text-right ">
      <button onClick={action}>{text}</button>
    </div>
  );
}

export default SimpleButton;
