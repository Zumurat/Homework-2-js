/*Задание-3 , Вариант (1)
Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.*/

let souvenir = prompt("Количество сувениров?", "");
let bauble = prompt("Количество безделушек?", "");
let totalWeight = souvenir * 75 + bauble * 112;
alert(totalWeight + "гр");

/*Вариант (2)
Представьте, что вы открыли в банке сберегательный счет под 4 % годовых. Проценты банк рассчитывает в конце года и добавляет к сумме счета. Напишите программу, которая запрашивает у пользователя сумму первоначального депозита, после чего рассчитывает и выводит на экран сумму на счету в конце первого, второго и третьего годов. Все суммы должны быть округлены до двух знаков после запятой.*/

let initialDeposit = prompt("Сумма первоначального депозита?", ""); //Первоначальный размер депозита
let annualInterestRate = 4 / 100; //Годовая прцентная ставка
let numberOfDaysInAYear = 365; //Количество дней в году
let wetTimeInDays = 365; //Срок влажения в днях

let amountAtTheEndOfTheTerm1 =
  initialDeposit *
  (1 + annualInterestRate / numberOfDaysInAYear) ** wetTimeInDays;

console.log(amountAtTheEndOfTheTerm1.toFixed(2)); // Сумма на конец 1 года

let amountAtTheEndOfTheTerm2 =
  amountAtTheEndOfTheTerm1 *
  (1 + annualInterestRate / numberOfDaysInAYear) ** wetTimeInDays;

console.log(amountAtTheEndOfTheTerm2.toFixed(2)); // Сумма на конец 2 года

let amountAtTheEndOfTheTerm3 =
  amountAtTheEndOfTheTerm2 *
  (1 + annualInterestRate / numberOfDaysInAYear) ** wetTimeInDays;

console.log(amountAtTheEndOfTheTerm3.toFixed(2));

/*Вариант (3)
3. Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
    - сумма a и b;
    - разница между a и b;
    - произведение a и b;
    - частное от деления a на b;
    - остаток от деления a на b;
    - результат возведения числа a в степень b.*/

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

let addition = a + b;
let h1 = document.querySelector(".addition");
h1.innerText = `Сумма чисел ${addition}`;

let subtraction = a - b;
let h2 = document.querySelector(".subtraction");
h2.innerText = `Разность чисел ${subtraction}`;

let multiplication = a * b;
let h3 = document.querySelector(".multiplication");
h3.innerText = `Произведение чисел ${multiplication}`;

let division = a / b;
let h4 = document.querySelector(".division");
h4.innerText = `Частное чисел ${division}`;

let modulus = a % b;
let p = document.querySelector(".modulus");
p.innerText = `Остаток от деления ${modulus}`;

let exponentiation = a ** b;
let span = document.querySelector(".exponentiation");
span.innerText = `Возведение в степень ${exponentiation}`;
