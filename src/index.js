/* eslint-disable no-undef,no-mixed-operators,no-console */
const d3 = require('d3');
require('./styles/nightsky.css');

const startPath = 'M 152.000 172.000 L 175.511 184.361 L 171.021 158.180 L 190.042 139.639 L 163.756 135.820 L 152.000 112.000 L 140.244 135.820 L 113.958 139.639 L 132.979 158.180 L 128.489 184.361 L 152.000 172.000';

const randomStars = Array(500).fill(1).map(() => ({
  //  (window.innerWidth-200, -100) prevents the star from goind outside (right, left) the screen
  // -200+100 = -100 to include negative numbers
  x: Math.random() * (window.innerWidth - 100 + 1) - 100,
  y: Math.random() * (window.innerHeight - 100 + 1) - 100,
  rotate: Math.random() * 360,
  scale: Math.random() * 0.7 + 0.3,
  color: '#d0d0d0',
}));

// rotate: Math.random() * 0,
console.log('window.innerWidth: ', window.innerWidth, 'window.innerHeight', window.innerHeight);
console.log(randomStars[0]);
console.log('window.innerWidth: ', window.innerWidth, 'window.innerHeight', window.innerHeight);

d3.select('#root')
  .append('svg')
  .attr('class', 'container')
  .selectAll('path')
  .data(randomStars)
  .enter()
  .append('path')
  .attr('d', startPath)
  .attr('fill', randomStar => randomStar.color)
  .attr('stroke-width', 1.5)
  .attr('stroke', '#99ccff')
  .attr('transform', randomStar => `scale(${randomStar.scale}) translate(${randomStar.x} ${randomStar.y})`);

