const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.className = "grids";
  container.appendChild(div);
}

const gridCells = document.querySelectorAll(".grids");
gridCells.forEach((cell) => {
  let passes = 0;
  cell.addEventListener("mouseover", function () {
    if (passes < 10) {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      passes++;
      cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${passes * 0.1})`;
    }
  });
});

const button = document.querySelector(".reset");
button.addEventListener("click", function () {
  let newSize = prompt(
    "How big would you like your new sketchpad to be the max being 100?"
  );
  if (newSize === null || newSize === "") {
    alert("Please enter a number!");
    return;
  } else if (isNaN(newSize)) {
    alert("Please enter a valid number!");
    return;
  } else if (newSize > 100) {
    alert("Number too large! Please enter a number up to 100");
    return;
  } else if (newSize <= 0) {
    alert("Please enter a number greater than 0!");
    return;
  }
  container.innerHTML = "";
  const cellSize = 800 / newSize + "px";
  for (let i = 0; i < newSize * newSize; i++) {
    const div = document.createElement("div");
    div.className = "grids";
    div.style.width = cellSize;
    div.style.height = cellSize;
    container.appendChild(div);
  }
  const gridCells = document.querySelectorAll(".grids");
  gridCells.forEach((cell) => {
    let passes = 0;

    cell.addEventListener("mouseover", function () {
      if (passes < 10) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        passes++;
        cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${passes * 0.1})`;
      }
    });
  });
});
