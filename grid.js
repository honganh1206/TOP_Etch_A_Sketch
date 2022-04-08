// Sets global constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCell");
let slider = document.querySelector("#sizeRange")
// create buttons
const btnReset = document.getElementsByClassName("reset")
const btnSColor = document.querySelectorAll(".color-choice")
const btnColorPicker = document.querySelector("#input-color");
// change the trail color
let currentColor = 'black'


// FUNCTIONS
// Creates a default grid sized 16x16
function createGrid(rowNum, colNum) {
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
  for (i = 0; i < rowNum; i++)
    for (j = 0; j < colNum; j++) {
      let newCells = document.createElement("div");
      rows[j].appendChild(newCells).className = "gridCell";
      newCells.addEventListener('mouseover',
        e => e.target.classList.add('my-color'))
    };
  // this does not work somehowv
  // let gridPixels = container.querySelectorAll("div");
  // Array.from(gridPixels).forEach(gridPixel => {
  //   addEventListener('mouseover', colorGrid)
  // })
  // Testing => empty string
  // Test with typeof => still working
  // let gridPixels = document.getElementsByClassName("gridCell")
  // for (i = 0; i < gridPixels.length; i++) {
  //   console.log(typeof gridPixels[i])
  //  }
};
// clear grid
function eraseAllColor() {
  let gridPixels = document.getElementsByClassName("gridCell");
  for (let i = 0; i < gridPixels.length; i++) {
    // gridPixels[i].style.backgroundColor = "#ffffff"
    console.log(typeof gridPixels[i])
  }
}
// EXECUTIONS
// On Page Load
createGrid(16, 16);
// Event listeners
// 3 modes each btn: click/over/out
btnReset.addEventListener('click', eraseAllColor);
// btnReset.addEventListener('mouseover', buttonHover);
// btnReset.addEventListener('mouseout', buttonStandard);
// btnSColor.forEach(btnColor => btnColor.addEventListener('click', changeColor));
// btnSColor.forEach(btnColor => btnColor.addEventListener('mouseover', buttonHover));
// btnSColor.forEach(btnColor => btnColor.addEventListener('mouseout', buttonStandard));
// slider.addEventListener('mouseup', pixelSize);
// btnColorPicker.addEventListener('change', userColorSelection, false);
// btnColorPicker.addEventListener('input', userColorSelection, false);

