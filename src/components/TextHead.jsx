import React from 'react';

function TextHead({ text, extraStyle }) {
  return (
    <p className={'mt-10 text-xl font-bold uppercase ' + extraStyle}>{text}</p>
  );
}

export default TextHead;
