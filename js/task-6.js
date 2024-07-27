function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
    const amount = parseInt(inputEl.value, 10);
  if (amount < 1 || amount > 100) { return alert("Number out of range") }; 
  createBoxes(amount);
  inputEl.value = "";
  });

  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); 
    const fragment = document.createDocumentFragment();
  

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }