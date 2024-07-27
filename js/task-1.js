const categoriesAll = document.querySelector('#categories');
const categoriesItem = categoriesAll.children;
console.log(`Number of categories: ${categoriesItem.length}`);

Array.from(categoriesItem).forEach(category => {
    const categoryText = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryText}`);
    console.log(`Elements: ${categoryItemsCount}`);
});