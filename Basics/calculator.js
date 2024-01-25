const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  if (b > a) return b - a;
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

module.exports = { add, divide, multiply, substract };
