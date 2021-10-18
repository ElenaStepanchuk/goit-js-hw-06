const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const btnValueRef = document.querySelector('#value');

let counterValue = 0;

btnIncrementRef.addEventListener('click', () => {
    counterValue += 1;
    btnValueRef.textContent = counterValue;
})
btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    btnValueRef.textContent = counterValue;
})

console.log(btnIncrementRef);
console.log(btnIncrementRef);
console.log(btnValueRef);