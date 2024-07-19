import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Manipulate from './components/manipulation/manipulation';
import Page from './components/text_page/text_page';
import './App.css';
import loadFonts from './components/fontFile/fontFile';

function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#aabbcc');
  const [size, setSize] = useState(20);
  const [family, setFamily] = useState('poppins');

  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <div className="parent">
      <Page size={size} color={color} family={family} />
      <Manipulate colorChanger={setColor} size={setSize} Change_family={setFamily} />
    </div>
  );
}

export default App;
