// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const renderToDom = (divId, htmlToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToPrint;
};

// HTML Structure
const htmlStructure = () => {
  const domString = `<div id="btn"></div>
  <div id="lyrics-container"></div>`;
  renderToDom('#app', domString);
};

// API Call : get the call & returns data.
const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// HTML on the dom.
const lyricsOnDom = (artist, song) => {
// this is a promise.
  getLyrics(artist, song).then((response) => {
    renderToDom('#lyrics-container', response.lyrics);
  });
};

const button = () => {
  const domString = '<button id="song-btn" class = "btn btn-primary">Click Me</button>';
  renderToDom('#btn', domString);
};

const events = () => {
  document.querySelector('#song-btn').addEventListener('click', () => {
    lyricsOnDom('prince', 'purple rain');
  });
};

const startApp = () => {
  htmlStructure();
  button();
  events();
};

startApp();
