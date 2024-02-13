const { Circle, Square, Triangle } = require('./shapes');
describe('Circle', () => {
    test('should return a circle', () => {
        const circle = new Circle('red', 'A', 'black');
        expect(circle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><circle cx="200" cy="200" r="150" fill="red" /><text x="200" y="200" fill="black" font-size="40px" text-anchor="middle">A</text></svg>`)
    });
});

describe('Square', () => {
    test('should return a square', () => {
        const square = new Square('red', 'A', 'black');
        expect(square.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><rect x="200" y="200" width="250" height="250" fill="red" /><text x="325" y="325" fill="black" font-size="40px" text-anchor="middle">A</text></svg>`)
    });
});

describe('Triangle', () => {
    test('should return a triangle', () => {
        const triangle = new Triangle('red', 'A', 'black');
        expect(triangle.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><polygon points="300,100 200,400 400,400" fill="red" /><text x="300" y="300" fill="black" font-size="40px" text-anchor="middle">A</text></svg>`)
    });
});