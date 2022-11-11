/*Задание-4 , Вариант-1
Дана переменная a со значением '10' и переменная b со значением '20'. Сложите данные переменные как числа.*/
let a = "10";
let b = "20";
let result = +a + +b;
console.log(result);

/*Вариант-2
Даны две переменные с числами. Сложите значения этих переменных как строки и выведите результат на экран..*/
let c = 15;
let d = 20;
c = String(c);
d = String(d);
let result2 = c + d;
let h1 = document.querySelector("h1");
h1.innerText = `${result2}`;

/*Вариант-3
Переделайте этот код так, чтобы в нем применялись операции инкремента и декремента:
let num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);*/

let num = 10;
num++;
num++;
num--;
alert(num);

/*Вариант-4
Напишите скрипт, который вычисляет количество секунд в году.*/
function calculateSecond(sec, min, hour, year) {
  secondsInOneMinute = 60;
  minuteInOneHour = 60;
  hourInOneDay = 24;
  daysInOneYear = 365;
  let result3 =
    secondsInOneMinute * minuteInOneHour * hourInOneDay * daysInOneYear;
  console.log(result3);
}

calculateSecond();
