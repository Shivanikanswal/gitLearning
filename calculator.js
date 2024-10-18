function add(a, b) {
  var ans = a + b;
  return ans;
}
const sum = document.getElementById("addition");
sum.addEventListener("click", () => {
  sum.innerHTML = "The sum is" + additionResult;
});

function multiply(x, y) {
  return x * y;
}

function subtract(m, n) {
  return m * n;
}

function division(p, q) {
  return p / q;
}
const additionResult = add(12, 5);
multiply(12, 2);
subtract(23, 7);
division(12, 4);
