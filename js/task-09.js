function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
  body: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  bntEl: document.querySelector('.change-color'),
}

refs.bntEl.addEventListener('click',changeBgColor);

function changeBgColor() {
  const BgColor = getRandomHexColor ();
  refs.body.style.backgroundColor = BgColor;
  refs.spanEl.textContent = BgColor;
}

