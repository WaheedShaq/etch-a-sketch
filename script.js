const outerGrid = document.querySelector('.grid-container');
const grayButton = document.querySelector('.grayscale');

function fillSquare() {
  this.style.background = '#FE5163';
}

// Gets the 16x16 grid

function get16Grid() {
  clearGrid();
  for (let i = 0; i < 16 * 16; i++) {
    const newColumnsCount = 16;
    const newRowsCount = 16;
    outerGrid.style.gridTemplateColumns = `repeat(${newColumnsCount}, 1fr)`;
    outerGrid.style.gridTemplateRows = `repeat(${newRowsCount}, 1fr)`;
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'grid-item');
    outerGrid.appendChild(innerDiv);
    innerDiv.addEventListener('mouseover', fillSquare);
  }
}

// Gets the 32x32 grid

function get32Grid() {
  clearGrid();
  for (let i = 0; i < 32 * 32; i++) {
    const newColumnsCount = 32;
    const newRowsCount = 32;
    outerGrid.style.gridTemplateColumns = `repeat(${newColumnsCount}, 1fr)`;
    outerGrid.style.gridTemplateRows = `repeat(${newRowsCount}, 1fr)`;
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'grid-item');
    outerGrid.appendChild(innerDiv);
    innerDiv.addEventListener('mouseover', fillSquare);
  }
}

// Gets the 64x64 grid

function get64Grid() {
  clearGrid();
  for (let i = 0; i < 64 * 64; i++) {
    const newColumnsCount = 64;
    const newRowsCount = 64;

    outerGrid.style.gridTemplateColumns = `repeat(${newColumnsCount}, 1fr)`;
    outerGrid.style.gridTemplateRows = `repeat(${newRowsCount}, 1fr)`;
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'grid-item');
    outerGrid.appendChild(innerDiv);
    innerDiv.addEventListener('mouseover', fillSquare);
  }
}

// get grayscale colors

function grayScale() {
  grayButton.addEventListener('click', () => {
    gridItems.forEach((item) =>
      item.addEventListener('mouseover', () => {
        let randomNumber = Math.floor(Math.random() * 255);
        item.style.background = `rgb(${randomNumber},${randomNumber},${randomNumber} )`;
      })
    );
  });
}

// Erase the grid
function clearGrid() {
  outerGrid.innerHTML = '';
}
