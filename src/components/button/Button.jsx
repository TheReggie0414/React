
import React, { useState } from 'react';
import './Button.css';

export const ComponentButton = () => {
  const [showText, setShowText] = useState(false);
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <button onClick={toggleText}>Toggle Text</button>
      {showText && <p>Текст якийсь</p>}
    </div>
  );
};
