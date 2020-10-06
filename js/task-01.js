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
// console.log(categories);

const categoriesQuantity = categories.length;
console.log(`В списке ${categoriesQuantity} категории.`);

// console.log(categories);
categories.forEach(categories => {
  console.log(`Категория: ${categories.children[0].textContent}`),
    console.log(
      `Количество элементов: ${categories.children[1].children.length}`,
    );
});
