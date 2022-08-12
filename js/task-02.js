const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const addElement = ingredients.map(element => {

  const newIngredients = document.createElement('li');
  newIngredients.textContent = element;
  newIngredients.classList.add('item');
  return newIngredients;
  
});
const listIngredients = document.querySelector('#ingredients');
listIngredients.append(...addElement);






