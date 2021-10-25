const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
    max: document.querySelector('input[max="96"]'),
}

// console.dir(refs.max);
// console.log(refs.max.value);
refs.span.style.fontSize = refs.max.value + "px";
function handleChangeTextValueInput (event) {
   return refs.span.style.fontSize = event.target.value + "px";
}

refs.input.addEventListener('input', handleChangeTextValueInput);