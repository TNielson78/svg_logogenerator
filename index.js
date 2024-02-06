const filesystem = require('./node_modules/graceful-fs/graceful-fs');
const inquirer = require('./node_modules/inquirer');
const { square, circle, triangle } = require('./lib/shapes');

class logo {
    constructor() {
        this.shapes = [square, circle, triangle];
        this.text = "Welcome to the logo program";
    }
    set textElement(text, color) {
        this.textElement = `<text x=150 y=150 fill=${color}>${text}</text>`;
    }
    set shapeElement(shape, color) {
        this.shapeElement = `<${shape} cx="150" cy="150" r="100" fill=${color} />`;
    }
    get logo() {
        return `<svg height="300" width="300">${this.textElement}${this.shapeElement}</svg>`;
    }

    //Array
    const questions = [

        {
            type: 'input',
            name: 'text',
            message: 'Text (3) characters long',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo',
            choices: ['square', 'circle', 'triangle'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter the color for the shape',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color for the text',
        },
    ];
    //Create function to write to file

}