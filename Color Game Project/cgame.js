var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDislay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //mode buttons event listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
  for(var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDislay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDislay.textContent = "Try Again!";
      }
    });
  }
  reset();
}


function reset() {
  //generate new colors
  colors = generateColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDislay.textContent = "";
}

resetButton.addEventListener("click", function() {
  reset();
})

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
     //change each color to match given color
     squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateColors(num) {
  // make array
  var arr = [];
  // add num random colors to array
  for(var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  // return the array
  return arr;
}

function randomColor() {
  //pick a red, green, and blue from 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
