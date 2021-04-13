
const gridContainer = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement("div");
    cell.style["height"] = "3rem";
    cell.style["width"] = "3rem";
    cell.style["border"] = "0.1rem solid grey";
    cell.addEventListener("mouseenter", e => e.target.classList.add("cell-hover"));
    gridContainer.append(cell);
}