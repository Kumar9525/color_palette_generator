const generateButton = document.getElementById('generate-btn');
const colorPalette = document.getElementById('color-palette');

function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function generateColorBox() {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = generateRandomColor();
    return colorBox;
}

function addColorToPalette() {
    const colorBox = generateColorBox();
    colorPalette.appendChild(colorBox);
}

generateButton.addEventListener('click', addColorToPalette);
