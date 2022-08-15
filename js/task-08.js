const form = {
    formEl: document.querySelector('.login-form'),
    inputFormEmail: document.querySelector('input[type="email"]'),
    inputFormPassword: document.querySelector('input[type="password"]'),
    
};

form.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (!form.inputFormEmail.value || !form.inputFormPassword.value) {
        return alert('This inputs should be filled!');
    }
    else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            console.log('onFormSubmit -> name', name);
            console.log('onFormSubmit -> value', value);
            
        });
        form.formEl.reset();
    }
    
}
