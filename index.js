const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Square, Triangle, Circle } = require('./lib/shapes');

const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const colorKeywords = require("color-name");

const colkeys = Object.keys(colorKeywords).map((keyword) =>
  keyword.toLowerCase()
);

var userinput = {};

function nullTest(input) {
  if (!input || input == null || input == [] || input == "") {
    return "Answer the question.";
  }
  return true;
}

function init() {
  inquirer
    .prompt([
      {
        name: "text",
        message: "Enter up to 3 characters.",
        type: "input",
        validate: (input) => {
          const nullTestResult = nullTest(input);

          if (nullTestResult !== true) {
            return nullTestResult;
          }

          if (input.length > 3) {
            return `Enter up to 3 characters.`;
          }

          return true;
        },
      },
      {
        name: "textcolor",
        message: "Enter a color for that text.",
        type: "input",
        validate: (input) => {
          const nullTestResult = nullTest(input);

          if (nullTestResult !== true) {
            return nullTestResult;
          }

          if (
            !colkeys.includes(input.toLowerCase()) &&
            !colorRegex.test(input)
          ) {
            return "Enter a valid color keyword or hexadecimal number.";
          }

          return true;
        },
      },
      {
        name: "shapeStation",
        message: "Enter a shape.",
        type: "list",
        choices: ["Square", "Triangle", "Circle"],
        validate: nullTest,
      },
      {
        name: "shapecolor",
        message: "Enter a color for that shape.",
        type: "input",
        validate: (input) => {
          const nullTestResult = nullTest(input);

          if (nullTestResult !== true) {
            return nullTestResult;
          }

          if (
            !colkeys.includes(input.toLowerCase()) &&
            !colorRegex.test(input)
          ) {
            return "Enter a valid color keyword or hexadecimal number.";
          }

          return true;
        },
      },
    ])
    .then(function (answer) {
      console.log(answer);
      userinput = answer;
      createLogo(userinput);
    });
}
init();

function createLogo({ text, textcolor, shapeStation, shapecolor }) {
  let svgMarkup = "";
  var selectToSvg="";

  const shapeConstructorMap = {
    Square: Square,
    Triangle: Triangle,
    Circle: Circle,
  };
  const ShapeConstructor = shapeConstructorMap[shapeStation];

  console.log(ShapeConstructor)
  if (ShapeConstructor) {
    let userShape = new ShapeConstructor();
    userShape.setColor(shapecolor);
    selectToSvg = userShape.render();
  } else {
    console.error('Invalid shape:', shapeStation);
  }
  var preRenderString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${selectToSvg}<text font-size="50px" font-weight="100" font-family="New Century Schoolbook, TeX Gyre Schola, serif" fill="${textcolor}" dominant-baseline="middle" text-anchor="middle"`
  switch (shapeStation.toLowerCase()) {
    case "circle":
      svgMarkup = `${preRenderString} x="50%" y="52%">${text}</text></svg>`;
      break;
    case "square":
      svgMarkup = `${preRenderString} x="33%" y="53%" >${text}</text></svg>`;
      break;
    case "triangle":
      svgMarkup = `${preRenderString} x="50%" y="65%">${text}</text></svg>`;
      break;
    default:
      shapeMarkup = "";
      break;
  }

  // return svgMarkup;
  fs.writeFile("logo.svg", svgMarkup, (err) => {
    if (err) {
      console.error("Error generating logo:", err);
    } else {
      console.log("Generated logo.svg.");
      console.log(svgMarkup);
    }
  });
}
