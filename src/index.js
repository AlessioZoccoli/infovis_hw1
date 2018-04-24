/* eslint-disable no-undef */
const d3 = require('d3');
require('./styles/nightsky.css');

const startPath = 'M 152.000 172.000 L 175.511 184.361 L 171.021 158.180 L 190.042 139.639 L 163.756 135.820 L 152.000 112.000 L 140.244 135.820 L 113.958 139.639 L 132.979 158.180 L 128.489 184.361 L 152.000 172.000';

const randomStars = Array(1000).fill(1).map(() => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  rotate: Math.random() * 360,
  scale: Math.random(),
  color: Math.round(Math.random() * 20),
}));


d3.select('#root')
  .append('svg')
  .attr('class', 'container')
  .selectAll('path')
  .data(randomStars)
  .enter()
  .append('path')
  .attr('d', startPath)
  .attr('fill', randomStar => d3.schemeCategory10[randomStar.color])
  .attr('transform', randomStar => `scale(${randomStar.scale}) rotate(${randomStar.rotate}) translate(${randomStar.x} ${randomStar.y})`);
