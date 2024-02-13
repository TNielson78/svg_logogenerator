const inquirer = require('inquirer');
const generateLogo = require('./lib/generateLogo');
const { Square, Circle, Triangle } = require('./lib/shapes');

class Logo {
    // constructor() {
    //     this.textElement = '';
    //     this.shapeElement = '';
    // }

    // setTextElement(text, color) {
    //     this.textElement = `<text x="200" y="200" fill="${color}" font-size="40px" text-anchor="middle">${text}</text>`;
    // }

    setShapeElement(shape, color, text, textColor) {
        //const shapeObject = this.shapes.find((s) => s.name === shape);
        if (shape === 'circle') {
            this.shapeElement = `<circle cx="200" cy="200" r="150" fill="${color}" />`;
            this.textElement = `<text x="200" y="200" fill="${textColor}" font-size="40px" text-anchor="middle">${text}</text>`;
        } else if (shape === 'square') {
            this.shapeElement = `<rect x="200" y="200" width="250" height="250" fill="${color}" />`;
            this.textElement = `<text x="325" y="325" fill="${textColor}" font-size="40px" text-anchor="middle">${text}</text>`;
        } else if (shape === 'triangle') {
            this.shapeElement = `<polygon points="300,100 200,400 400,400" fill="${color}" />`;
            this.textElement = `<text x="300" y="300" fill="${textColor}" font-size="40px" text-anchor="middle">${text}</text>`;

        }
    }


    getLogo() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500">${this.shapeElement}${this.textElement}</svg>`;
    }
}

// Questions array
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add to the logo (3)char max?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to add to the logo?',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the shape to be?',
    },

];

function createLogo() {
    inquirer.prompt(questions).then((answers) => {
        const { text, textColor, shape, color } = answers;
        if (shape === 'circle') {
            const circle = new Circle(color, text, textColor);
            generateLogo(circle.render());
        }
        if (shape === 'triangle') {
            const triangle = new Triangle(color, text, textColor);
            generateLogo(triangle.render());
        }
        if (shape === 'square') {
            const square = new Square(color, text, textColor);
            generateLogo(square.render());
        }


            console.log('Logo created');
        }).catch((error) => {
            console.error('Error creating logo', error);
        });
}

// Call the function to start the process
createLogo();
