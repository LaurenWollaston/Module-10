// Shape class
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
  }
}

// Square subclass
class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

// Circle subclass
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

// Triangle subclass
class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

// Exporting 
module.exports = {
    Shape,
    Square,
    Circle,
    Triangle,
  };
  