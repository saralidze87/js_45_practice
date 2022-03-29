// console.log(`module 1.1`)

// const shouldRenew = confirm(`Хотите продлить подписку?`);
// console.log(shouldRenew);



// // Example 1. Выведи на экран общее количество яблок 
// // и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)



// // Example 2. Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);



// // Example 3 - Приоритет операторов
// // Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);



// // Example 4 - Класс Math
// // Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. 
// // значения переменной value. 
// // Используй методы Math.floor(), Math.ceil() и Math.round(). 
// // Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));



// // Example 5 - Шаблонные строки
// // Составь фразу с помощью шаблонных строк A has B bots in stock, 
// // где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// // Example 6 - Методы строк и чейнинг
// // Напиши скрипт который рассчитывает индекс массы тела человека.
// // Для этого необходимо разделить вес в киллограммах
// // на квадрат высоты человека в метрах.

// // Вес и высота хранятся в переменных weight и height, 
// // но не как числа, а в виде строк (специально для задачи). 
// // Нецелые числа могут быть заданы в виде 24.7 или 24,7, 
// // то есть в качестве разделителя дробной части может быть запятая.

// // Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// const weightNum = Number(weight.replace(',', '.'));
// console.log(weightNum);
// const heightNum = Number(height);
// console.log(heightNum);
 
// const bmi = (weightNum / Math.pow(heightNum, 2)).toFixed(1);
// console.log(bmi); // 28.8



// // Example 7 - Операторы сравнения и приведение типов
// // Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon, },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;
// console.log(forecast);



function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);