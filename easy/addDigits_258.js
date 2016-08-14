/**
 *
 * Given a non-negative integer num, repeatedly add all its digits until the result has *only one digit.
 *
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, *return it.
 * @param {number} num
 * @return {number}
 *
 */

// method 1

var addDigits = function(num) {
  var numToString = String(num);
  var stringLen = numToString.length;
  var numArr = numToString.split('');
  if (stringLen === 1) {
    return num;
  }
  var total = numArr.reduce(function(prev, cur, i) {
    return add(prev, cur, i, numArr.length);
  }, 0)

  return total;
};

function add(a, b, i, arrLen) {
  if (i === arrLen - 1) {
    var lastNum = parseInt(a) + parseInt(b);
    var lastNumLen = lastNum.toString().length;
    return lastNumLen > 1 ? addDigits(lastNum) : lastNum;
  } else {
    return parseInt(a) + parseInt(b);
  }
}

//method 2
var addDigits = function(num) {
  while (num >= 10) {
    var sum = 0;
    ('' + num).split('').forEach(function(v) {
      sum += parseInt(v);
    });
    num = sum;
  };
  return num;
}

// method 3
// input 0 -> 0 , 1->1, 2->2, 3->3, 4->4, 5->5, 6->6, 7->7, 8->8, 9->9
// input 10 -> 1 , 11->2, 12->3, 13->4, 14->5, 15->6, 16->7, 17->8, 18->9, 19->1
// input 20 -> 2 , 21->3, 22->4, 23->5, 24->6, 25->7, 26->8, 27->9, 28->1, 29->2
// 從上面規則可以看出除了0 其他能被9整除的數字加到最後都會得到9 其餘數字都會得到除以9的餘數

var addDigits = function(num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
}
