//Task -1 1. Identify the datatype
// Create variables for the following values and identify their datatype:

const age = 25;
const language = "JavaScript";
const isReady = true;
let missingValue;
const emptyValue = null;
const price = 123.45;
const largeNumber = 12345678901234567890n;
const id = Symbol("id");

console.log("     ");
console.log( "Task -1.1. Identify the datatype");
console.log(age, typeof age);
console.log(language, typeof language);
console.log(isReady, typeof isReady);
console.log(missingValue, typeof missingValue);
console.log(emptyValue, typeof emptyValue);
console.log(price, typeof price);
console.log(largeNumber, typeof largeNumber);
console.log(id, typeof id);


// Task -1.2. 
// Make one variable per datatype
const num = 42;
const str = "Hello, World!";
const isTrue = true;                                          
let   undef;
const nul = null;
const flt = 3.14;
const bigInt = 123456789012345678901234567890n;
const sym = Symbol("unique");
console.log("     ");
console.log( "Task -1.2. Make one variable per datatype");
console.log(num, typeof num);
console.log(str, typeof str);
console.log(isTrue, typeof isTrue);
console.log(undef, typeof undef);
console.log(nul, typeof nul);
console.log(flt, typeof flt);
console.log(bigInt, typeof bigInt);
console.log(sym, typeof sym);   

// Task 1-3.Predict the Output
//Without running the code, predict the output:

const number = 100;
const string = "100";
const booleanValue = true;
let undefinedValue;
const nullValue = null;
const bigIntValue = 100n;
console.log("     ");
console.log("Task -1.3. Predict the Output");
console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 100n);

// Task 1-4. Student Information
// Create variables to store: - Student name
//- Student name
// - Student age
// - Student percentage
// - Whether the student has completed the course
//  - Student's grade

const studentName = "John Doe";
const studentAge = 20;
const studentPercentage = 85.5;
const hasCompletedCourse = true;
const studentGrade = "A";

console.log("     ");
console.log( "Task -1.4. Student Information");
console.log( studentName, typeof studentName);
console.log("Student Age:", studentAge, typeof studentAge);
console.log("Student Percentage:", studentPercentage, typeof studentPercentage);
console.log("Has Completed Course:", hasCompletedCourse, typeof hasCompletedCourse);
console.log("Student Grade:", studentGrade, typeof studentGrade);   

// Task 1-5. 5.Create two variables:
//let userName;
//let userEmail = null;

//Print both values and their datatypes.
//Then answer:
//1. What is the difference between undefined and null?
//2. What does typeof userName return?
//3. What does typeof userEmail return?
//4. Why is typeof null considered unusual in JavaScript?

let userName;
let userEmail = null;

console.log("     ");
console.log( "Task -1.5. Create two variables");
console.log(userName, typeof userName);
console.log(userEmail, typeof userEmail);

// Answers as follwing:
console.log("     ");
console.log("Ans1.undefined means no value has been assigned. null is an intentional value meaning “no value.”");
console.log("Ans2. typeof userName returns 'undefined' because the variable has been declared but not assigned a value.");
console.log("Ans3. typeof userEmail returns 'object' because null is considered an object in JavaScript, which is a known quirk of the language.");
console.log("Ans4. typeof null is considered unusual in JavaScript because it returns  'object', which can be misleading since null is not actually an object but a primitive value representing the absence of any object value.");

console.log("     ");
console.log("Assignment completed successfully");  
console.log(" ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊ ＊");