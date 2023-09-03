const outerGrid = document.querySelector('.grid-container');

function get16Grid() {
  for (let i = 0; i < 16 * 16; i++) {
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute('class', 'grid-item');
    outerGrid.appendChild(innerDiv);
  }
}

get16Grid();
