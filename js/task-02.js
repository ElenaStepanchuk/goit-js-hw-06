const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('ul#ingredients');


const ingredientItem = ingredients.map(elem => {
  const itemRef = document.createElement("li");
  itemRef.textContent = elem;
  itemRef.classList.add('item');
  return itemRef;
 
})
console.log(ingredientItem);
ingredientList.append(...ingredientItem);




