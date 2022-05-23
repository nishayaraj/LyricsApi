import renderToDom from '../helpers/renderToDom';

// HTML Structure
const htmlStructure = () => {
  const domString = `<div id="form-container"></div>
  <div id="lyrics-container"></div>`;
  renderToDom('#app', domString);
};

export default htmlStructure;
