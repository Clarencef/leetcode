/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines;
 * otherwise, it will return false.

 Each letter in the magazine string can only be used once in your ransom note.
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
  var compareObj = {};
  var noteTxtArr = ransomNote.split('');
  var MagazineTxtArr = magazine.split('');
  var noteIsPossible = true;

  MagazineTxtArr.forEach(text => {
    if (!compareObj[text]) compareObj[text] = 0;
    compareObj[text]++;
  });

  noteTxtArr.forEach(text => {
    if (compareObj[text]) {
      compareObj[text]--;
      if (compareObj[text] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
  return noteIsPossible;
};