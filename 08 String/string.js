//String

const str1 = "Ali"; //it will give error if we use single quote inside double quotes and vice versa and if we go on second line it will give error because it will consider it as end of string but we can use backticks to avoid this problem

const str2 = "Rayees-Ali"; // it will give error if we use single quote inside double quotes and vice versa and if we go on second line it will give error because it will consider it as end of string but we can use backticks to avoid this problem

const str3 = `Ali Rayees `; // modern way to declare string using backticks and it allows us to use single and double quotes inside the string without any error and also allows us to go on second line without any error

console.log(str1);
console.log(str2);
console.log(str3);

// str length
console.log(str1.length);

// string concatenation
const str4 = str1 + " " + str2;

console.log(str4);

// string interpolation
const str5 = `${str1} ${str2}`;

console.log(str5);

// string methods
console.log(str1.toUpperCase()); // it will convert all the characters to uppercase
console.log(str1.toLowerCase()); // it will convert all the characters to lowercase
console.log(str1.includes("li")); // it will return true if the string contains the specified substring
console.log(str1.startsWith("Al")); // it will return true if the string starts with the specified substring
console.log(str1.endsWith("li")); // it will return true if the string ends with the specified substring
console.log(str1.indexOf("i")); // it will return the index of the first occurrence of the specified substring
console.log(str1.lastIndexOf("i")); // it will return the index of the last occurrence of the specified substring
console.log(str1.slice(0, 2)); // it will return the substring from the specified start index to the specified end index
console.log(str1.substring(0, 2)); // it will return the substring from the specified start index to the specified end index
console.log(str1.replace("Ali", "Rayees"));

// string template literals
const name = "Ali";
const age = 25;
const str6 = `My name is ${name} and I am ${age} years old.`;
console.log(str6);

// string escape characters
const str7 = 'I am a "JavaScript" developer.'; // it will allow us to use double quotes inside the string
const str8 = "I am a 'JavaScript' developer."; // it will allow us to use single quotes inside the string
const str9 = "I am a \nJavaScript developer."; // it will allow us to go on second line
console.log(str7);
console.log(str8);
console.log(str9);

// string immutability
let str10 = "Hello";
str10[0] = "h"; // it will not change the first character of the string because strings are immutable
console.log(str10); // it will still print "Hello" because strings are immutable

// string splitting
const str11 = "Hello World";
const arr1 = str11.split(" "); // it will split the string into an array of substrings based on the specified separator
console.log(arr1); // it will print ["Hello", "World"]

//  string trimming
const str12 = "   Hello World   ";
const str13 = str12.trim(); // it will remove the whitespace from both ends of the string
console.log(str13); // it will print "Hello World" without the whitespace

// string padding
const str14 = "5";
const str15 = str14.padStart(3, "0");
console.log(str15); // it will pad the string with the specified character until it reaches the specified length and it will print "005"
const str16 = str14.padEnd(3, "0");
console.log(str16); // it will pad the string with the specified character until it reaches the specified length and it will print "500"

// string repeating
const str17 = "Hello ";
const str18 = str17.repeat(3); // it will repeat the string the specified number of times
console.log(str18); // it will print "Hello Hello Hello "

// string comparison
const str19 = "Hello";
const str20 = "hello";
console.log(str19 === str20);

// string to number conversion
const str21 = "123";
const num1 = Number(str21); // it will convert the string to a number
console.log(num1); // it will print 123
const num2 = parseInt(str21); // it will convert the string to an integer
console.log(num2); // it will print 123
const num3 = parseFloat(str21); // it will convert the string to a floating-point number
console.log(num3); // it will print 123

// number to string conversion
const num4 = 123;
const str22 = String(num4);
console.log(str22); // it will convert the number to a string and print "123"
const str23 = num4.toString();
console.log(str23); // it will convert the number to a string and print "123"

// string to boolean conversion
const str24 = "true";
const bool1 = Boolean(str24);
console.log(bool1); // it will convert the string to a boolean and print true
const str25 = "false";
const bool2 = Boolean(str25);
console.log(bool2); // it will convert the string to a boolean and print true because any non-empty string is considered true in JavaScript

// boolean to string conversion
const bool3 = true;
const str26 = String(bool3);
console.log(str26);
const bool4 = false;
const str27 = String(bool4);
console.log(str27); // it will convert the boolean to a string and print "false"

// string to array conversion
const str28 = "Hello World";
const arr2 = Array.from(str28); // it will convert the string to an array of characters
console.log(arr2); // it will print ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// array to string conversion
const arr3 = ["H", "e", "l", "l", "o"];
const str29 = arr3.join(""); // it will convert the array to a string by joining the elements with the specified separator
console.log(str29); // it will print "Hello"

// string to date conversion
const str30 = "2024-06-01";
const date1 = new Date(str30);
console.log(date1); // it will convert the string to a date object and print the date in the specified format

// date to string conversion

const date2 = new Date();
const str31 = date2.toISOString();
console.log(str31); // it will convert the date object to a string in ISO format and print it

// string to JSON conversion
const str32 = '{"name": "Ali", "age": 25}';
const obj1 = JSON.parse(str32);
console.log(obj1); // it will convert the string to a JSON object and print it

// JSON to string conversion
const obj2 = { name: "Ali", age: 25 };
const str33 = JSON.stringify(obj2);
console.log(str33); // it will convert the JSON object to a string and print it

// string to regular expression conversion
const str34 = "Hello World";
const regex1 = new RegExp(str34);
console.log(regex1); // it will convert the string to a regular expression and print it

// regular expression to string conversion
const regex2 = /Hello World/;
const str35 = regex2.toString();
console.log(str35); // it will convert the regular expression to a string and print it

// string to function conversion
const str36 = "function greet() { return 'Hello'; }";
const func1 = new Function(str36);
console.log(func1()); // it will convert the string to a function and execute it, printing "Hello"
// function to string conversion
function greet() {
  return "Hello";
}

const str37 = greet.toString();
console.log(str37); // it will convert the function to a string and print it
