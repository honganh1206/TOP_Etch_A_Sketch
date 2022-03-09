// consts and vars
const container = document.getElementById("container")
let rows = document.getElementsByClassName("gridRow")
let cells = document.getElementsByClassName("gridCell")

function makeRows(rowNum) {
  for (i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
};

function makeColumns(colNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < colNum; j++) {

    }
  }
}



