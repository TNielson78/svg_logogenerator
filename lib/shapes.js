class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;

    }
    // setShapeElement(color, text, textColor) {
    // //    this.text= `<text x="200" y="200" fill="${textColor}" font-size="40px" text-anchor="middle">${text}</text>`;

    // }
}
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><rect x="200" y="200" width="250" height="250" fill="${this.color}" /><text x="325" y="325" fill="${this.textColor}" font-size="40px" text-anchor="middle">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><circle cx="200" cy="200" r="150" fill="${this.color}" /><text x="200" y="200" fill="${this.textColor}" font-size="40px" text-anchor="middle">${this.text}</text></svg>`;
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><polygon points="300,100 200,400 400,400" fill="${this.color}" /><text x="300" y="300" fill="${this.textColor}" font-size="40px" text-anchor="middle">${this.text}</text></svg>`;
    }
}

module.exports = { Square, Circle, Triangle }