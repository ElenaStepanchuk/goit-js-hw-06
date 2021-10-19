const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
};
let counterValue = 0;

refs.increment.addEventListener('click', () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
})
refs.decrement.addEventListener('click', () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
})

console.log(refs.increment);
console.log(refs.decrement);
console.log(refs.value);