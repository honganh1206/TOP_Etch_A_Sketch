// Sets global constants and variables
const container = document.querySelector(".container");
const btnReset = document.querySelector(".reset")
let currentColor = 'black'


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
  // var gridPixels = container.querySelectorAll('div');
  // gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', 
  // e => e.target.classlist.add('my-color')));
} 
// clear grid
function eraseAllColor() {
  let gridPixels = document.querySelectorAll("div");
  gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "#ffffff")  
}


// EXECUTIONS
// On Page Load
createGrid(16);
// Event listeners
btnReset.addEventListener('click', eraseAllColor);
