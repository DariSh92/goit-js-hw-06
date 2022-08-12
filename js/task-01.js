const quantityOfCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityOfCategory}.length`);

 
quantityOfCategory.forEach(element => {
    const titleItem = element.querySelector('h2').textContent;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${titleItem} , Elements: ${itemsLength}`);
   
});






