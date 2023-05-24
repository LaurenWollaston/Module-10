const { Square, Triangle, Circle } = require('./shapes');

describe('Square', () => {
  test('render method should return the correct SVG string', () => {
    const square = new Square();
    square.setColor('red');
    expect(square.render()).toEqual('<rect width="200" height="200" fill="red" />');
  });
});

describe('Triangle', () => {
  test('render method should return the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render method should return the correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="green" />');
  });
});