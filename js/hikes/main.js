//on load grab the array and insert it into the page


import Hikes from './renderHikes.js';

const myHikes = new Hikes('hikes');


window.addEventListener("load", () => {
  myHikes.showHikeList();
});

