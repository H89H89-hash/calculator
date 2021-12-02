// ??????????? v.0.9.1
const firstValue = document.querySelectorAll("#screen").textContent;
let a = 0;
let b = 0;
let answer = 0;
let plus = document.querySelector("#plus");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let equals = document.querySelector("#equals");
one.addEventListener("click", function screenWrite() {
  document.querySelector("#screen").textContent += 1;
  a = a += 1;
  return null;
});

two.addEventListener("click", function screenWrite() {
  document.querySelector("#screen").textContent += 2;
  a += 1;
});

plus.addEventListener("click", function screenWriteAddition() {
  let firstValue = document.querySelector("#screen").textContent;
  document.querySelector("#screen").textContent = firstValue;
  one.removeEventListener("click", screenWrite());
  one.addEventListener("click", function screenWrite() {
    document.querySelector("#screen").textContent += 1;
    b += 1;
  });
});

equals.addEventListener("click", function screenWrite() {
  document.querySelector("#screen").textContent =
    parseInt(document.querySelectorAll("#screen").textContent) +
    parseInt(firstValue);
});
