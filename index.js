// &&=: This operator is similar to the && operator, but it also assigns the value of the second operand to the first operand if the first operand is truthy.
let a = true;
a &&= false; // a is now false
// ||= : This operator is similar to the || operator, but it also assigns the value of the second operand to the first operand if the first operand is falsy.
let b;
b ||= "default value"; // b is now "default value"
// ??= : This operator is similar to the ?? operator, but it also assigns the value of the second operand to the first operand if the first operand is null or undefined.
let c;
c ??= "default value"; // c is now "default value"
// These operators can be useful for assigning default values to variables,
//  or for performing other types of operations that are commonly used in conditional statements.
//  They can help make your code more concise and readable by combining multiple operations into a single statement.
const isEven = (number) => number % 2 === 0;
const numbers = [1, 2, 3, 4];

// from first to the last lookup
console.log(numbers.find(isEven));
// 2
console.log(numbers.findIndex(isEven));
// 1

// from last to the first lookup
// console.log(numbers.findLast(isEven)); // proposed solution not in use yet for now
// 4
// console.log(numbers.findLastIndex(isEven)); // proposed solution not in use yet for now
// 3