const prompt = require('prompt-sync')();
const svgCaptcha = require('svg-captcha');
const fs = require('fs');

const text = prompt('Enter up to three characters: ');
const textColor = prompt('Enter the text color (keyword or hexadecimal number): ');
const shapes = ['circle', 'triangle', 'square'];
const shapeIndex = prompt(`Choose a shape by entering its index (0: ${shapes[0]}, 1: ${shapes[1]}, 2: ${shapes[2]}): `);
const shape = shapes[shapeIndex];
const shapeColor = prompt(`Enter the ${shape} color (keyword or hexadecimal number): `);


const captcha = svgCaptcha.create({
  size: { width: 300, height: 200 },
  text: text,
  color: textColor,
  background: shapeColor,
  noise: 2,
  charPreset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  inverse: true 
});

fs.writeFileSync('logo.svg', captcha.data);

console.log('Generated logo.svg');