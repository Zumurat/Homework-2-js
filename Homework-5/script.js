/* Задание 5  номер 1
 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.*/
function number(a) {
  console.log(a ** 3);
}

number(3);

/* Номер 2
 Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст `'+++'`
, а во втором `'---'`*/

function checkNumber(n) {
  if (n > 0) {
    console.log(`'+++'`);
  } else {
    console.log(`'---'`);
  }
}

checkNumber(1);

/* Номер 3
3. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа `3`  и запишите его в переменную `res` */

let getNumber = (b) => b ** 3;

let res = getNumber(3);

console.log(res);
document.write(res);

/* Номер 4
4. Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до `999`. Смотрите пример:
    
    `func(123); // выведет 'сто двадцать три'` */
