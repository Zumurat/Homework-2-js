/*Задание-2 Номер-1
Ваша задача состоит в том, чтобы создать 8 переменных с помощью let, которые будут представлять 8 разных типов данных. Каждую из этих переменных требуется явно преобразовать к 3-м типам: к number, boolean и string. Конечные значения выведите в консоль.*/

let n = 5;
console.log(n);
console.log(typeof n);

n = String(n);
console.log(n);
console.log(typeof n);

n = Boolean(n);
console.log(n);
console.log(typeof n);

let str = "Hello!";
console.log(str);
console.log(typeof str);

str = Number(str);
console.log(str);
console.log(typeof str);

str = Boolean(str);
console.log(str);
console.log(typeof str);

let bigint = 12345678910n;
console.log(bigint);
console.log(typeof bigint);

bigint = String(bigint);
console.log(bigint);
console.log(typeof bigint);

bigint = Number(bigint);
console.log(bigint);
console.log(typeof bigint);

bigint = Boolean(bigint);
console.log(bigint);
console.log(typeof bigint);

let hasCar = true;
console.log(hasCar);
console.log(typeof hasCar);

hasCar = String(hasCar);
console.log(hasCar);
console.log(typeof hasCar);

hasCar = Number(hasCar);
console.log(hasCar);
console.log(typeof hasCar);

let age = null;
console.log(age);
console.log(typeof age);

age = String(age);
console.log(age);
console.log(typeof age);

age = Boolean(age);
console.log(age);
console.log(typeof age);

age = Number(age);
console.log(age);
console.log(typeof age);

let firstNumber;
console.log(firstNumber);
console.log(typeof firstNumber);

firstNumber = String(firstNumber);
console.log(firstNumber);
console.log(typeof firstNumber);

firstNumber = Boolean(firstNumber);
console.log(firstNumber);
console.log(typeof firstNumber);

firstNumber = Number(firstNumber);
console.log(firstNumber);
console.log(typeof firstNumber);

let user = {
  name: "Anna",
  age: 15,
};
console.log(user);
console.log(typeof user);

user = String(user);
console.log(user);
console.log(typeof user);

user = Number(user);
console.log(user);
console.log(typeof user);

user = Boolean(user);
console.log(user);
console.log(typeof user);

let symbol = Symbol("mySymbol");
console.log(symbol);
console.log(typeof symbol);

symbol = String(symbol);
console.log(symbol);
console.log(typeof symbol);

symbol = Boolean(symbol);
console.log(symbol);
console.log(typeof symbol);

symbol = Number(symbol);
console.log(symbol);
console.log(typeof symbol);

/*Задание-2 Номер-2
Вариант b
Население Москвы равняется а=9000000 жителей. Население Нью-Васюков равняется b=1000 жителей. Напи-шите программу, которая определяет разницу в числе жителей между двумя городами. Используйте перемен-ные величины.*/
let a = 9000000;
let b = 1000;
let populationDifference = a - b;
console.log(populationDifference);

/*Вариант c
В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет.*/
let yardLength = 50;
let yardWidth = 30;
let houselength = 20;
let houseWidth = 10;
let houseArea = houselength * houseWidth; //Площадь дома
console.log(houseArea);
let yardArea = yardLength * yardWidth - houseArea; //Свободная площадь двора
console.log(yardArea);
let fenceLength = (yardLength + yardWidth) * 2 - (20 + 10); //Длина забора
console.log(fenceLength);

/*Вариант d
Автомобиль 3 часа ехал со скоростью 80 км/час и 2 часа со скоростью 90 км/час. Вычислить среднюю ско-рость автомобиля (она равна суммарному пути, деленному на суммарное время)*/
let firstTime = 3;
let firstSpeed = 80;
let secondTime = 2;
let secondSpeed = 90;
let averageSpeed =
  (firstTime * firstSpeed + secondTime * secondSpeed) /
  (firstTime + secondTime);
console.log(averageSpeed);

/*Вариант e
Напишите программу для следующей задачи: Компьютер спрашивает названия двух планет, радиусы их орбит (в миллионах километров) и скорости движения по орбите (в миллионах километров в сутки). Компьютер вычисляет продолжительность года на планетах и выдает результат в консоли ввиде: Продолжительность года на планете Земля – 365 суток, а на планете Эоэлла – 12 суток*/
let planet = prompt("Название планеты?", "");
let radius = prompt("Радиус орбиты планеты?", "");
let orbitalSpeed = prompt("Скорость движения по орбите первой планеты", "");

let lengthOfTheYear = (2 * 3.14 * radius) / orbitalSpeed;
console.log(
  `Продолжительность года на планете ${planet} ${lengthOfTheYear} - суток `
);

/*Вариант f
В браузер вводятся два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. Результат вычисления показать в консоли.*/
let num1 = 25;
let num2 = 15;

if (num1 > num2) {
  console.log(num1 + num2);
} else {
  console.log(num1 - num2);
}

/*Вариант g
Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? Результат вывести в консоли.*/

//Не смогла решить

/*Вариант h
В браузер вводится возраст человека, узнав возраст, браузер дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!".*/

let userAge = 17;
if (userAge > 17) {
  let institute = prompt("В каком институте ты учишься?", " ");
  alert("Хороший институт");
  alert("До следующей встречи!");
} else if (userAge <= 17) {
  let school = prompt("В какой школе ты учишься?", " ");
  alert("Неплохая школа");
  alert("До следующей встречи!");
} else {
  alert("До следующей встречи!");
}

/*Вариант i
Человек вводит в браузер строку, смысл которой - приветствие при встрече. Компьютер тоже должен ответить приветствием. Отвечать нужно в соответствии со следующей таблицей:*/
let greetings = "Привет";

switch (greetings) {
  case "Привет":
    alert("Привет");
    break;
  case "Здравствуйте":
    alert("Здравствуйте");
    break;
  case "Здорово":
    alert("Здравствуйте");
    break;
  case "Добрый день":
    alert("Салют");
    break;
  case "Приветик":
    alert("Салют");
    break;
  case "Здравия желаю":
    alert("Вольно");
    break;
  default:
    alert("Hi");
}
