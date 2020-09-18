/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента (тега h2) и количество элементов в категории
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
 */

const categories = document.querySelectorAll('.item');
console.log(categories);

const categoriesQuantity = categories.length;
console.log(`В списке ${categoriesQuantity} категории.`);

const titleEl = document.querySelectorAll('h2');

categories.forEach(function (item) {
  console.log('item', item);
  console.log(categories.titleEl[0]);

  //   return console.log(`В списке ${categories.length} категории`);
});

// const ulRef = document.querySelectorAll('li');

// const categoriesQuantity = categories.length;
// categoriesQuantity.forEach((num, idx) =>
//   console.log(`index ${idx}, value ${num}`),
// );

// const categoriesQuantity = categories.length;
// console.log(`В списке ${categoriesQuantity} категории.`);

// const titleEL = document.querySelectorAll('h2');
// console.log(`Категория: ${titleEL[0].textContent}`);

// const items = document.querySelectorAll('li');
// console.log(items);
// const itemsQuantity = items.length;
// console.log(itemsQuantity);

// const numbers = [5, 2, 6];
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));
