
const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);

function initGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", e => e.target.classList.add("cell-hover"));
        grid.append(cell);
    }
}

function clearGrid() {
    const cells = grid.querySelectorAll("div");
    cells.forEach(cell => cell.classList.remove("cell-hover"));
}

initGrid();