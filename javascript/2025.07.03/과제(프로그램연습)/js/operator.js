let addb = document.querySelector('#add');
let subb = document.querySelector('#sub');
let multyb = document.querySelector('#multy');
let dividb = document.querySelector('#divid');

addb.addEventListener('click', sum);
subb.addEventListener('click', minus);
multyb.addEventListener('click', gob);
dividb.addEventListener('click', nanu);

function sum() {
  let result = "0"
  let num1 = Number(document.calc.num1.value);
  let num2 = Number(document.calc.num2.value);
  result = num1 + num2;
  document.querySelector('#result').value = result;
}

function minus() {
  let result = "0"
  let num1 = Number(document.calc.num1.value);
  let num2 = Number(document.calc.num2.value);
  result = num1 - num2;
  document.querySelector('#result').value = result;
}

function gob() {
  let result = "0"
  let num1 = Number(document.calc.num1.value);
  let num2 = Number(document.calc.num2.value);
  result = num1 * num2;
  document.querySelector('#result').value = result;
}

function nanu() {
  let result = "0"
  let num1 = Number(document.calc.num1.value);
  let num2 = Number(document.calc.num2.value);
  result = num1 / num2;
  document.querySelector('#result').value = result;
}

