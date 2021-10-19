const refs = {
  input: document.querySelector('input#name-input'),
  output: document.querySelector('span#name-output'),
}

function handleTextInput () {
    if (refs.input.value === '') {
      return  refs.output.textContent = 'Anonymous';
    }
    return refs.output.textContent = refs.input.value;
}
refs.input.addEventListener('input', handleTextInput)
