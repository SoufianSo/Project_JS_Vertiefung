console.log("it works");
let result = Number(document.querySelector(".result").innerHTML);

function plusone() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result + 1;
}

function minusone() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result - 1;
}
function plusten() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result + 10;
}
function minusten() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result - 10;
}
function plushundert() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result + 100;
}
function minushundert() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result - 100;
}

function malzwei() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = result * 2;
}
function reset() {
  let result = Number(document.querySelector(".result").innerHTML);
  console.log(result);
  document.querySelector(".result").innerHTML = 0;
}
