// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCell");

// create buttons
const btnReset = document.getElementById("reset")
const btnBlack = document.getElementById("black")
const btnRainbow = document.getElementById("rainbow")

// change the trail color
let currentColor = 'black'
const colors = { black: 'black' }
e => e.target.classList.add(colors[currentColor])

// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
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
      newCell.addEventListener('mouseover',
        e => e.target.classList.add('my-color-class')
      )
      rows[j].appendChild(newCell).className = "gridCell";
    };
  };
};

// change grid square color to red
function changeColor() {
  this.style.backgroundColor = '#ff9999';
}


defaultGrid();

