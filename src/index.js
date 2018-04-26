/* eslint-disable no-undef,no-mixed-operators,no-console,no-restricted-globals,no-underscore-dangle,no-plusplus,max-len,prefer-const,no-trailing-spaces,no-shadow */

const d3 = require('d3');
require('./styles/sky.css');

window.d3 = d3;
// SVG star path
const starPath = 'M 0.000 20.000 L 23.511 32.361 L 19.021 6.180 L 38.042 -12.361 L 11.756 -16.180 L 0.000 -40.000 L -11.756 -16.180 L -38.042 -12.361 L -19.021 6.180 L -23.511 32.361 L 0.000 20.000';
// pick a color
const colors = c => d3.schemeSet3[c]; // const colors = t => d3.interpolatePiYG(t);

let index = 0;

// OFFSET prevents the stars from going outside the screen
const getRandomStar = (index) => {
  const OFFSET = 38;
  let randX = OFFSET + (Math.random() * (self.innerWidth - OFFSET * 2));
  let randY = OFFSET + (Math.random() * (self.innerHeight - OFFSET * 2));
  let scale = Math.random() * 0.7 + 0.3;
  let rotate = Math.random() * 360;
  return [randX, randY, scale, rotate, index, colors(Math.floor(Math.random() * 12))];
};

let data = [];

const container = d3.select('#root')
  .append('svg')
  .attr('class', 'container');

const updateState = () => {
  const stars = container.selectAll('path').data(data);

  stars.exit().remove();

  stars
    .enter()
    .append('path')
    .attr('d', starPath)
    .merge(stars)
    .attr('fill', d => d[5])
    .attr('stroke-width', 1.5)
    .attr('stroke', '#99ccff')
    .attr('transform', ([randX, randY, scale, rotate]) => `rotate(${rotate} ${randX} ${randY}) translate(${randX} ${randY}) scale(${scale})`)
    .on('click', (d) => {
      data = data.filter(element => element[4] !== d[4]);
      updateState();
    });
};

d3.interval(() => {
  data = [...data, getRandomStar(index)];
  updateState();
  index++;
}, 500);


// https://bost.ocks.org/mike/join/
