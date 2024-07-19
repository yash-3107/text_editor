// src/loadFonts.js
import axios from 'axios';

let fontList = [];

const fetchFonts = async () => {
  const dummyList = [];
  const response = await axios.get(
    'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDbUQ4d1YuKAGfIPhxESIC_KibF4Ybxklc'
  );
  response.data.items.forEach((item) => {
    dummyList.push({
      family: item.family,
      url: item.files.regular,
    });
  });
  fontList = dummyList;
};

const generateFontFace = ({ family, url }) => `
  @font-face {
    font-family: '${family}';
    src: url('${url}');
    font-weight: normal;
    font-style: normal;
  }
`;

const loadFonts = async () => {
  await fetchFonts();
  const style = document.createElement('style');
  style.type = 'text/css';
  fontList.forEach((font) => {
    style.innerHTML += generateFontFace(font);
  });
  document.head.appendChild(style);
};

export default loadFonts;
