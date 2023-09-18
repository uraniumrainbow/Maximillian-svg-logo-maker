const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const { Triangle, Square, Circle } = require("./lib/shapes");


function setShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};


function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();