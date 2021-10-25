const refs = {
    validator: document.querySelector('#validation-input'),
}
console.log(refs.validator.dataset.length);

function handleValidatorInput(event) {
        
    if (event.target.value.length === Number(refs.validator.getAttribute('data-length'))) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
 }
    
refs.validator.addEventListener('blur', handleValidatorInput);