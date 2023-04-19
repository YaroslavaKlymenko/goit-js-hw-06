const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const title = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
