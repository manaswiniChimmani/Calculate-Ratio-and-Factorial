const ratioOfNum = require("../ratio/index");
const factorialOfNum = require("../factorial/index");
const ratioAndFactorial = (n1, n2, n3) => {
  const ratio = ratioOfNum(n1, n2);
  const factorial = factorialOfNum(n3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
