window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let exerciseOneInput = "";
  let studentCanvas1 = document.getElementById('student-canvas-1');
  let character = studentCanvas1.getContext("2d");
  character.clearRect(0, 0, 1024, 128);

  exerciseOneInput = prompt("Message:");
    if (exerciseOneInput.length >= 50) {
      alert("Your message is too long. Keep it under 50 characters.");
      exerciseOneInput = prompt("Message:");
    }
    else if (exerciseOneInput === null) {
      character = studentCanvas1.getContext("2d");
      character.clearRect(0, 0, 1024, 128);
  }

  character.font = '48px sans-serif';
  character.clearRect(0, 0, 1024, 128);
  character.strokeText(exerciseOneInput, 30, 70);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    let studentCanvas2 = document.getElementById('student-canvas-2');
    let character2 = studentCanvas2.getContext('2d');
    character2.clearRect(0, 0, 1024, 128);

    do {
    var width = prompt("Width: ");
    var height = prompt("Height: ");
    var x = prompt("X: ");
    var y = prompt("Y: ");

    if (width == null || height == null || x == null || y == null) {
      character2.clearRect(0, 0, 1024, 128);
      break;
    }
    if (width > 1024 || width < 1) { //stuff for width
      alert("Your width must be between 1 and 1024.")
    }
    else if (height > 512 || height < 1) {//stuff for height
      alert("Your height must be between 1 and 512.")
    }
    else if (x < 1 || x > 1024) {//stuff for x
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    else if (y < 1 || y > 512) {//stuff for y
      alert("Your y-coordinate must be between 1 and 512.")
    }
    else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {//stuff for isnan
      alert("One of your values is not a number.")
    }
    else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {//stuff for too big
      alert("Your rectangle won't fit on the canvas.")
    }
    } while(x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) ||
          isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512
          || width > 1024 || width < 1 || height > 512 || height < 1)

    character2.clearRect(0, 0, 1024, 512);
    character2.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    let studentCanvas3 = document.getElementById("student-canvas-3");
    let character3 = studentCanvas3.getContext("2d");
    character3.clearRect(0, 0, studentCanvas3.width, studentCanvas3.height);

    let verify = true;
    let input = null;

    while (verify == true) {
      input = prompt("Color: ");
      input = input.toLowerCase();
      input = input.trim();

    switch (input) {
      case "black":
        character3.fillStyle = input;
        verify = false;
        break;
      case "blue":
        character3.fillStyle = input;
        verify = false;
        break;
      case "orange":
        character3.fillStyle = input;
        verify = false;
        break;
      case "green":
        character3.fillStyle = input;
        verify = false;
        break;
      case "purple":
        character3.fillStyle = input;
        verify = false;
        break;
      case "yellow":
        character3.fillStyle = input;
        verify = false;
        break;
      case "red":
        character3.fillStyle = input;
        verify = false;
        break;
      case null:
        verify = false;
        break;
      default:
        alert("That is not a supported color. Try again.");
        break;
      }
      }

      if (input != null) {
        character3.beginPath();
        character3.rect(10, 10, 100, 50);
        character3.fill();
      }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  let studentCanvas4 = document.getElementById("student-canvas-4");
  let character4 = studentCanvas4.getContext("2d");
  character4.clearRect(0, 0, studentCanvas4.width, studentCanvas4.height);

  let verify = true;

  while (verify == true) {
    let aSide = prompt("side 1:");
    let bSide = prompt("side 2:");
    let cSide = prompt("side 3:");

    if (cSide >= bSide) {
      cSide = cSide
    }
    else {
      cSide = bSide
    }

    if (cSide >= aSide){
      cSide = cSide
    }
    else {
      cSide = aSide
    }

    if (bSide >= aSide) {
      bSide = bSide
    }
    else {
      bSide = aSide
    }

    if (isNaN(aSide) == true || isNaN(bSide) == true || isNaN(cSide) == true) {
      alert("One of your sides was not a number.");
    }
    else if (cSide == null || bSide == null || aSide == null) {
      verify = false;
    }
    else if ((25 + Number(bSide)) > 1024 || (Number(aSide) + 25) > 512) {
      alert("Your triangle won't fit on the canvas.");
    }
    else if (cSide ** 2 != aSide ** 2 + bSide ** 2) {
      alert("That's not a valid right triangle.");
    }
    else {
      character4.beginPath();
      character4.moveTo(25, 25);
      character4.lineTo(25, (25+Number(aSide)));
      character4.lineTo((25 + Number(bSide)), (25+Number(aSide)));
      character4.lineTo(25, 25);
      character4.stroke();
      verify = false;
  }
  }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    let studentCanvas5 = document.getElementById("student-canvas-5");
    let character5 = studentCanvas5.getContext("2d");
    character5.clearRect(0, 0, studentCanvas5.width, studentCanvas5.height);
    let radius;

      radius = prompt("radius:");

    do {
    if (radius == null) {
      character5.clearRect(0, 0, canvas5.width, canvas5.height);
    }
    else if (radius < 32) {
      alert("Your radius must be at least 32.")
    }
    else if (radius > (studentCanvas5.height / 2)) {
      alert("Your smiley face won't fit on the canvas.")
    }
    else if (isNaN(radius)) {
      alert("Your radius is not a number.")
    }
  } while (radius > 256 || isNaN(radius) || radius < 32);

    let eye = radius * 0.15
    let mouth = radius * 0.7

    character5.beginPath();
    character5.arc(512, 256, radius, 0, 2 * Math.PI);
    character5.stroke();
    character5.closePath();
    character5.beginPath();
    character5.arc(512, 256, mouth, 0, Math.PI);
    character5.stroke();
    character5.closePath();
    character5.beginPath();
    character5.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eye, 0, 2 * Math.PI);
    character5.stroke();
    character5.closePath();
    character5.beginPath();
    character5.arc(512 + 0.4 * radius, 256 - 0.4* radius, eye, 0, 2 * Math.PI);
    character5.stroke();
    character5.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};
