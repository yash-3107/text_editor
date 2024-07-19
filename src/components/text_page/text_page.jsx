import React, { useState, useEffect } from 'react';
import './text_page_.css';

function Page({ color, size, family }) {
  const [text, setText] = useState('');

  useEffect(() => {
    // Ensure that the family prop is applied correctly
    const textBox = document.getElementById('textBox');
    if (textBox) {
      textBox.style.fontFamily = `${family} !important`;
    }
  }, [family]);

  return (
    <form>
      <label htmlFor="textBox">Add Text</label><br />
      <textarea
        id="textBox"
        onChange={(event) => setText(event.target.value)}
        style={{ color, fontSize: `${size}px`, fontFamily: family}}
      ></textarea>
   
    </form>
  );
}

export default Page;
