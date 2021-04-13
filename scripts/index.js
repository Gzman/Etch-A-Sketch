
const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear-button");
const sizeButton = document.querySelector(".custom-button");
const x32Button = document.querySelector(".x32-button");
const x64Button = document.querySelector(".x64-button");
const colorSelector = document.querySelector(".color-selecter");
let mouseDownToEraese = false;

function initGrid(cellCount = 16) {
    resetGrid();
    document.documentElement.style.setProperty("--grid-cell-count", cellCount);
    for (let i = 0; i < cellCount * cellCount; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", e => {
            if (mouseDownToEraese == false) e.target.classList.add("cell-hover");
            else e.target.classList.remove("cell-hover");
        });
        cell.addEventListener("mousedown", e => mouseDownToEraese = true);
        cell.addEventListener("mouseup", () => mouseDownToEraese = false);
        grid.append(cell);
    }
}

const resetGrid = () => grid.querySelectorAll("div").forEach(cell => grid.removeChild(cell));

function clearGrid() {
    const cells = grid.querySelectorAll("div");
    cells.forEach(cell => cell.classList.remove("cell-hover"));
}

const isValidSize = input => {
    const n = parseInt(input);
    return !Number.isNaN(n) && n <= 100 && n > 0;
}

function changeGridSize() {
    let size = prompt("Enter new Size");
    while (size !== null && !isValidSize(size))
        size = prompt("Size must be between 1 and 100");
    if (size !== null) initGrid(parseInt(size));
}

sizeButton.addEventListener("click", changeGridSize);
clearButton.addEventListener("click", clearGrid);
x32Button.addEventListener("click", () => initGrid(32));
x64Button.addEventListener("click", () => initGrid(64));
colorSelector.addEventListener("change", e => document.documentElement.style.setProperty("--cell-color", e.target.value));

initGrid();