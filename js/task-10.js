function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

getRandomHexColor();

const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  box: document.querySelectorAll('#boxes'),
}

console.log(refs.input);
console.log(refs.createBtn);
console.log(refs.destroyBtn);
console.log(refs.box);

function inputChange(event) {
  refs.input.setAttribute("count", Number(event.currentTarget.value));
  console.log(Number(event.currentTarget.value));
};
refs.input.addEventListener("input", inputChange);

let baseboxSize = 30;

function handleCreateCollection() {
  let countBox = Number(refs.input.getAttribute("count"));
  console.log(countBox);
  for (let i = 0; i < countBox; i++) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

refs.createBtn.addEventListener("click", handleCreateCollection);

function handleDestroyCollection() {
  const allNewBoxes = document.querySelectorAll(".new-box");
 
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
};

refs.destroyBtn.addEventListener("click", handleDestroyCollection);

