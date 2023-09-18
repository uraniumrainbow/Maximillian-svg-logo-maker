const inquirer = require('inquirer');

const fs =  require('fs');

const { Triangle, Square, Circle } = require('./lib/shapes');

function writeToFile(fileName, answer) {
    let svgText = '';
    svgText = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>'
}