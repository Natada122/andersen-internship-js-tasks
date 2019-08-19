/*
Реализовать функцию, принимающую строку “a.b.c.d” и возвращающая объект со свойством объектом - a,
 со свойством объектом - b, со свойством объектом - с, со свойством d, равным null.
 Можно передать любую строку в указанном формате х.х.х.х.х.х…, и получить объект
 с вложенными объектами и завершающим null.
*/
/*
function matryoshka(string) {
  const objects = string.split('.');
  const first = {};
  return objects.reduce((prevVal, curVal, curIndex) => {
    if (curIndex !== objects.length - 1) {
      prevVal[curVal] = {};
      return prevVal[curVal];
    }
    prevVal[curVal] = null;
    return first;
  }, first);
}
console.log(matryoshka('a.b.c.d'));
*/
// ===========================================
/*
Объединение - union(a, b)
Пересечение - intersection(a, b)
Разность - difference(a, b)
*/
/*
function intersection(a, b) {
  return [...new Set(a.filter((value) => b.includes(value)))];
}
function union(a, b) {
  return [...new Set([...a, ...b.filter((value) => !a.includes(value))])];
}
function diff(a, b) {
  return [...new Set(a.filter((value) => !b.includes(value)))];
}
console.log(union([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9]));
// [4, 5, 7, 2, 1, 3, 9]
console.log(intersection([1, 2, 3], [4, 3, 2])); // [2, 3]
console.log(diff([1, 2, 3, 7, 9], [4, 5, 7, 2, 1, 5])); // [3, 9]
console.log(diff([4, 5, 7, 2, 1, 5], [1, 2, 3, 7, 9])); // [4, 5]
*/
// ===================================================
/*
 Анаграммы. Написать функцию anagrams(array), которая принимает массив слов и ищет анаграммы.
*/
/*
function anagrams(array) {
  const copy = array.map((value) => [...value].sort().join(''));
  const map = copy.reduce((prevVal, curVal, index) => {
    prevVal[curVal] = prevVal[curVal] || [];
    prevVal[curVal].push(array[index]);
    return prevVal;
  }, new Map());
  return [...map.values()];
}
const input = [
  'вертикаль',
  'кильватер',
  'апельсин',
  'спаниель',
  'австралопитек',
  'ватерполистка',
  'кластер',
  'сталкер',
  'стрелка',
];
console.log(anagrams(input));
*/
// =======================================================
// Написать функцию sum, которая работает с многим количеством последовательных вызовов.
/*
function sum(a) {
  let data = a;
  const sumSecond = (b) => {
    if (b) {
      data += b;
      return sumSecond;
    }
    return data;
  };
  sumSecond.toString = () => data;
  return sumSecond;
}
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4) + 1); // 11
console.log(sum(1)(2)(3)(4)(5) + 1); // 16
*/
// =============================================================
/*
let x = false && '' => false
x = false || ''     => ''
x = '' || 'Yes'     => Yes
x = {} && 'Some'    => Some
x = {} || 'Some'    => {}
x = {a: 10} && 'Some' => Some
x = {a: 10} || 'Some' => {a: 10}
x = 0 || true         => true
x = null || 0         => 0
x = undefined && 0    => undefined
x = '' || 0 && true   => 0
x = {} || 0 && true   => true
x = false || {} && true => true
*/
// ================================================
/*
Написать функцию compose, add, mul. add и mul - каррированные функции (только на 2 вызова).
функция compose принимает неограниченное кол-во функций
и применяет эти функции в обратном порядке.
*/
/*
const compose = (...args) => (x) => args.reduceRight((v, f) => f(v), x);
const mul = (x) => (y) => x * y;
const add = (x) => (y) => x + y;
const composed = compose(mul(2), add(5), add(2));
console.log(composed(3)); // 20
console.log([1, 2, 6].map(composed)); // [16, 18, 26]
*/
// =======================================
