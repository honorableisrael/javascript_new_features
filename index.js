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
