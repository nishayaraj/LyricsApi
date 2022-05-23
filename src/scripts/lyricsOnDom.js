import getLyrics from '../api/getLyrics';
import renderToDom from './helpers/renderToDom';

// HTML on the dom.
const lyricsOnDom = (artist, song) => {
  // this is a promise.
  getLyrics(artist, song).then((response) => {
    renderToDom('#lyrics-container', response.lyrics);
  });
};

export default lyricsOnDom;
