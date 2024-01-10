
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  const button = document.querySelector('.change-color');
  const body = document.body;
  const colorSpan = document.querySelector('.color');

  button.addEventListener('click', function () {
    
    const newColor = getRandomHexColor();
    
    body.style.backgroundColor = newColor;
    
    colorSpan.textContent = newColor;

  }); 


  /* ====== и второй способ, без анонимной функции ======
  ментор рекомендовал 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeColor); */