/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    var reverseNum = x.toString().split('').reverse();
    var lastWord = reverseNum[reverseNum.length - 1];
    var maxVal = Math.pow(2, 31) - 1;
    if (lastWord === '-') {
        reverseNum = reverseNum.pop() + reverseNum.join('');
        return Math.abs(reverseNum) > maxVal ? 0 : ~~reverseNum;
    } else {
        reverseNum = reverseNum.join('');
        return reverseNum > maxVal ? 0 : ~~reverseNum;
    }
    return reverseNum;
};