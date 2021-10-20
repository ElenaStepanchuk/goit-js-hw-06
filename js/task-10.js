function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
}

console.log(refs.input);
console.log(refs.createBtn);
console.log(refs.destroyBtn);


function handleCreateCollection() {
  let collection = refs.input.value;
  console.log(collection)
  // refs.input.target.reset()
  // console.dir(refs.input);
 }

function handleDestroyCollection() {
  let collection = '0';
  return console.log(collection)
}

refs.createBtn.addEventListener('click', handleCreateCollection);

refs.destroyBtn.addEventListener('click', handleDestroyCollection);

// refs.input.target.reset();
// refs.input.addEventListener('input')

// function createBoxes() {
// return console.log();
// }
