const quantityOfCategory = document.querySelectorAll('.item');
console.log('Number of categories :', quantityOfCategory.length);


quantityOfCategory.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});




