const refs = {
    validator: document.querySelector('#validation-input'),
}


function handleValidatorInput(event) {
    console.log(event.target.value.length);
    
    if (event.target.value.length === 6) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
 }
    
refs.validator.addEventListener('blur', handleValidatorInput);