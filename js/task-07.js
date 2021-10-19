const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

function handleChangeTextValueInput (event) {
   return refs.span.style.fontSize = event.target.value + "px";
}

refs.input.addEventListener('input', handleChangeTextValueInput);