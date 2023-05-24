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
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green" />');
  });
});


describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  test('setColor method should set the color property', () => {
    square.setColor('blue');
    expect(square.color).toEqual('blue');
  });

  test('render method should return the correct SVG string with the set color', () => {
    square.setColor('red');
    expect(square.render()).toEqual('<rect width="200" height="200" fill="red" />');
  });
});

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  test('setColor method should set the color property', () => {
    triangle.setColor('green');
    expect(triangle.color).toEqual('green');
  });

  test('render method should return the correct SVG string with the set color', () => {
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  test('setColor method should set the color property', () => {
    circle.setColor('yellow');
    expect(circle.color).toEqual('yellow');
  });

  test('render method should return the correct SVG string with the set color', () => {
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green" />');
  });
});