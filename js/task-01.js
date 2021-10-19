const navEl = document.querySelectorAll('.item');

console.log('Number of categories:', navEl.length);

navEl.forEach(elem => {
    console.log(elem.firstElementChild.textContent);
    console.log(elem.lastElementChild.children.length);
})
