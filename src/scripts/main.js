// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const lyricsOnDom = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    document.querySelector('#app').innerHTML = response.lyrics;
  });
};

const startApp = () => {
  lyricsOnDom('prince', 'purple rain');
};

startApp();
