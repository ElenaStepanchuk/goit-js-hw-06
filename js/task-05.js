const inputTextRef = document.querySelector('input#name-input');
const outputTextRef = document.querySelector('span#name-output');

function handleTextInput () {
    if (inputTextRef.value === '') {
      return  outputTextRef.textContent = 'Anonymous';
    }
    return outputTextRef.textContent = inputTextRef.value;
}
inputTextRef.addEventListener('input', handleTextInput)
