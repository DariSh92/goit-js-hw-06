function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  amount: 0,
  divEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.amount = event.currentTarget.value;
 
}

refs.createBtn.addEventListener('click', createBoxes);


function createBoxes() {
  const newArrayAmount = [];
  let sizeElement = 30;
  for (let i = 0; i <= +refs.amount; i += 1) {
    const createElement = document.createElement('div');
  
    createElement.style.width = `${sizeElement}px`;
    createElement.style.height = `${sizeElement}px`;
    createElement.style.backgroundColor = getRandomHexColor();
    newArrayAmount.push(createElement);
    sizeElement += 10;
  }

  refs.divEl.append(...newArrayAmount);

}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.divEl.innerHTML = '';
}


