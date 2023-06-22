//  1. Написать [функцию]pow, аналогичную [Math.pow]( ), которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду [prompt]. Результат выполнения функции вывести в консоль. Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать

let a = Number(prompt("num"));
let b = Number(prompt("pow"));
function pow(a, b) {
  return a ** b;
}
console.log(pow(a, b));

//
function pow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

let base = Number(prompt("Введите число:"));
let exponent = Number(prompt("Введите степень:"));
console.log(pow(base, exponent));

// 2. Создать программу, которая будет выполнять следующие действия:- [Циклом]заполнить [массив] с помощью команды `prompt` в котором будет список из 5-ти любых имен
// - Потом вывести с помощью `prompt` сообщение с просьбой ввести имя пользователя
// - Введенное имя, циклом  [сравнивать] с именами в массиве
// - Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью `alert` сообщение об ошибке
// - Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя

let names = [];
// Заполнение массива с помощью цикла и команды prompt
for (let i = 0; i < 5; i++) {
  let name = prompt("Введите имя:");
  names.push(name);
}
// Запрос имени пользователя
let userName = prompt("Введите ваше имя:");
// Проверка наличия имени пользователя в массиве
let found = false;
for (let i = 0; i < names.length; i++) {
  if (names[i] === userName) {
    found = true;
    break;
  }
}
// Вывод сообщения в зависимости от результата проверки
if (found) {
  alert(`${userName}, вы успешно вошли.`);
} else {
  alert("Ошибка: введенное имя пользователя не существует.");
}
