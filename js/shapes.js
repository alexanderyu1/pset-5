verifywindow.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

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

};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
