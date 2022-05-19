const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(nums) {
	return nums.reduce((num,sum) => {return num+sum;},0);
};

const multiply = function(nums) {
  return nums.reduce((prod,num) => {return prod*num;},1);
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
	let fact = 1;
  for(let i=2;i<=num;i++){
    fact *=i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
