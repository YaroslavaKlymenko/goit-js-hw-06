const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

function changeColor () {
  const colorRandom = getRandomHexColor();
  body.style.backgroundcolor = colorRandom;
  color.textContent = colorRandom;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', changeColor)