/*
Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
через ms миллисекунд и который несёт значение 100

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve(100), ms);
  });
}
delay(8000).then((value) => console.log(`Done with ${value}`));
*/
// =====================================================
/*
Напиши функцию в которой будет запрос на http://www.json-generator.com/api/json/get/cfQCylRjuG,
из ответа ты получишь поле getUsersData, если значение равно true
получи и выведи в консоль данные из http://www.json-generator.com/api/json/get/cfVGucaXPC
*/
/*
function request() {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then((responseFirst) => responseFirst.json()
      .then(({ getUsersData }) => {
        if (getUsersData) {
          return fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
        }
      }).then((responseSecond) => responseSecond.json()
        .then((data) => console.log(data))));
}
request();
*/
// =====================================================
/*
Напиши функцию в которой тебе надо будет получить данные по урлам.
Когда все данные будут загружены выведи в консоль массив с этими данными,
должно быть два варианта этой функции,
вариант с параллельной загрузкой, второй с последовательной.
*/
/*
const URLS = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];
const promises = URLS.map((value) => fetch(value));
function Parallel() {
  Promise.all(promises).then((results) => console.log(results.map((data) => data.json())));
}
function NotParallel() {
  promises
    .reduce(
      (curPromise, nextPromise) => curPromise.then(() => nextPromise.then((data) => data.json())),
      Promise.resolve(),
    )
    .then(() => console.log(promises));
}
NotParallel();
// Parallel();
*/
// =====================================================
/* Написать функцию getResolvedPromise(value),
которая возвращает зарезолвленный промис с значением value.
 Вызвать эту функцию со значением 500. Обработать вызов в then.
 Если придёт значение больше 300, то выбросить через throw ошибку c текстом ‘Ошибка’.
  Поймать ошибку через catch и вывести в консоль текст ошибки. Ниже описать finally,
  который будет выводить в консоль текст ‘This is Finally!’
*/
/*
function getResolvedPromise(value) {
  return Promise.resolve(value);
}
getResolvedPromise(500)
  .then((value) => {
    if (value > 300) {
      throw new Error('Ошибка');
    }
  })
  .catch((reason) => console.log(reason)).finally(console.log('This is Finally!'));
*/
