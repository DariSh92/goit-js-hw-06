const refs = {
    input: document.querySelector('#name-input'),
    outPut: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (!event.currentTarget.value) {
        refs.outPut.textContent = 'Anonymous';
        return;
    }
    refs.outPut.textContent = event.currentTarget.value;
}


