const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const createItem =  ingredient => {
  const li = document.createElement("li");
li.textContent = ingredient;
li.classList.add("item");
return li
}

const ingredientItems = ingredients.map(createItem);

ingredientsList.append(...ingredientItems);
