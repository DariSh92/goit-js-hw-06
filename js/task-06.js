const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
      refs.input.removeAttribute('class');
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        refs.input.classList.add('valid');
        return;
       
    }
   
    refs.input.classList.add('invalid');
};



