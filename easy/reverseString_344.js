/**
 * Write a function that takes a string as input and returns the string reversed.
 * 
 * Example:
 * Given s = "hello", return "olleh".
 * 
 * @param {string} s
 * @return {string}
 */

// method 1
var reverseString = function(s) {
    return s.split('').reverse().join('');
};

// method 2
var reverseString2 = function(s) {
    var newArr = [];
    var len =s.length; 
    for(var i = 0;i <= len; i++) {
        newArr.push(s.charAt(len - i));
    }
    return newArr.join('');
};