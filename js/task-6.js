function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', () => createBoxes(input.value));
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    if (amount < 1 || amount > 100) {
      return;
    }

    destroyBoxes(); 

    let sizeWidth = 30;
    let sizeHeight = 30;


    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${sizeWidth}px`;
      box.style.height = `${sizeHeight}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      sizeWidth += 10;
      sizeHeight += 10;
    }

    input.value = ''; 
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ''; 
  }