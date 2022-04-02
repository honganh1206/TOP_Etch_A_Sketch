// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCell");
let slider = document.querySelector("#sizeRange")
// create buttons
const btnReset = document.getElementById("reset")
const btnSColor = document.querySelectorAll(".color-choice")
const btnColorPicker = document.querySelector("#input-color");
// change the trail color
let currentColor = 'black'

// FUNCTIONS
// Creates a default grid sized 16x16
function createGrid(num) {
  makeRows(num);
  makeColumns(num);

  // let gridPixels = container.querySelectorAll("div");
  // gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  // Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
};

// Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "gridCell";
    };
  };
};

// color options + eraser
function colorGrid() {
  switch (color) {
    case "rainbow":
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.classList.remove("gray");
      break;
    case "gray":
      if (this.style.backgroundColor.match(/rgba/)) {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
          this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
          this.classList.add('gray');
        }
      }
      else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0') {
        return;
      }
      else {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      }
      break;
    case "eraser":
      this.style.backgroundColor = "#ffffff";
      this.classList.remove('gray');
      break;
    case "black":
      this.style.backgroundColor = "#000000";
      this.classList.remove('gray');
      break;
    default:
      this.style.backgroundColor = currentColor;
      this.classList.remove('gray');
      break;
  }
}

// clear grid
function eraseAllColor() {
  let gridPixels = container.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "#ffffff");
}

// update color button when a color is picked
function changeColor(event) {
  switch (event.target.dataset.color) {
    case "rainbow":
      color = "rainbow";
      break;
    case "rainbow":
      color = "rainbow";
      break;
    case "gray":
      color = "gray";
      break;
    case "eraser":
      color = "eraser";
      break;
    default:
      color = "black";
      break;
  }
}
function pixelSize() {
  let gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.remove());
  createGrid(slider.value);
}
function userColorSelection(event) {
  color = event.target.value;
}

function buttonHover() {
  this.style.border = '1px solid #ffffff';
}

function buttonStandard() {
  this.style.border = '1px solid #FF0000';
}
// EXECUTIONS
// On Page Load
createGrid(16);
// Event listeners
// 3 modes each btn: click/over/out
btnReset.addEventListener('click', eraseAllColor);
btnReset.addEventListener('mouseover', buttonHover);
btnReset.addEventListener('mouseout', buttonStandard);
btnSColor.forEach(btnColor => btnColor.addEventListener('click', changeColor));
btnSColor.forEach(btnColor => btnColor.addEventListener('mouseover', buttonHover));
btnSColor.forEach(btnColor => btnColor.addEventListener('mouseout', buttonStandard));
slider.addEventListener('mouseup', pixelSize);
btnColorPicker.addEventListener('change', userColorSelection, false);
btnColorPicker.addEventListener('input', userColorSelection, false);

