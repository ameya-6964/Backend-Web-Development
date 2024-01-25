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

//First Way Exporting Multiple Function
const functionObj = {
  add: add,
  substract: substract,
  divide: divide,
  multiply: multiply,
};
module.exports = functionObj;

// Second Way Of Exporting Multiple Function
// module.exports = { add, divide, multiply, substract };
