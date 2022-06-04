// Sets global constants and variables
const container = document.querySelector(".container");
// Buttons
const btnReset = document.querySelector(".reset")
const btnColorPicker = document.querySelector('#input-color')
const colorButtons = document.querySelectorAll('.color-choice')
// color
let currentColor = 'black'
var slider = document.querySelector('#sizeRange')

// FUNCTIONS
// Creates a default grid sized 16x16
function createGrid(gridNumber) {
  let gridArea = gridNumber * gridNumber;
  for (let i = 1; i <= gridArea; i++) {
    let gridItem = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    container.insertAdjacentElement('beforeend', gridItem)
  }
  var gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
  switch (currentColor) {
    case 'rainbow':
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.classList.remove('gray');
      break;
    case 'gray':
      if (this.style.backgroundColor.match(/rgba/)) {
        // slice() returns elements in an array into a new array
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
          this.style.backgroundColor = `rgba(0,0,0, ${currentOpacity + 0.1})`;
          this.classList.add('gray');
        }
      }
      else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0,0,0') {
        return;
      }
      else {
        this.style.backgroundColor = 'rgba(0,0,0.1)';
      }
      break;
    case 'eraser':
      this.style.backgroundColor = '#ffffff'
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
  let gridPixels = document.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "#ffffff")
}

function changeColors(event) {
  // dataset is a read-only property => provide access to custom data attributes e.g. color
  switch (event.target.dataset.color) {
    case 'rainbow':
      currentColor = 'rainbow'
      break;
    case 'gray':
      currentColor = 'gray'
      break;
    case 'eraser':
      currentColor = 'eraser'
      break;
    default:
      color = 'black'
      break;
  }

}
function pixelSize() {
  let gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.remove());
  createGrid(slider.value);
}

function useColor(event) {
  currentColor = event.target.value;
}



// EXECUTIONS
// On Page Load
createGrid(16);
// Event listeners
btnReset.addEventListener('click', eraseAllColor);
colorButtons.forEach(btnColor => btnColor.addEventListener('click', changeColors));
slider.addEventListener('mouseup', pixelSize);
btnColorPicker.addEventListener('change', useColor, false);
btnColorPicker.addEventListener('input', useColor, false);
