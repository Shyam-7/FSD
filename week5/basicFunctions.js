// File: basicFunctions.js

// Question 1: Write a JavaScript program to compute the sum of an array of integers.
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Example usage

// Question 2: Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
  }
  return false;
}
console.log(isLeapYear(2020)); // Example usage

// Question 3: Write a JavaScript function that checks whether a passed string is palindrome or not.
function isPalindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(isPalindrome("A man a plan a canal Panama")); // Example usage

// Question 4: Write a JavaScript program to test the first character of a string is uppercase or not.
function isFirstCharUppercase(str) {
  return /^[A-Z]/.test(str);
}
console.log(isFirstCharUppercase("Hello")); // Example usage
