function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();
console.log(color);

const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  div: document.querySelector('.widget'),
}

function handleChangeColor(event) {
  
  refs.span.textContent = getRandomHexColor();
  if (!event.target.classList.contains('change-color')) {
    return;
  }
  return refs.div.parentElement.style.backgroundColor = getRandomHexColor();
  
}

refs.button.addEventListener('click', handleChangeColor);
console.log(refs.span);
 
