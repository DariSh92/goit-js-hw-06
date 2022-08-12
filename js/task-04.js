let counterValue = 0;

const value = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const onDecrementButtonClick = () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
}

const onIncrementButtonCLick = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
}

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonCLick);








