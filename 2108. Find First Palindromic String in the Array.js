var firstPalindrome = function (words) {
  var isPalindrome = function (word) {
    let i = 0,
      j = word.length - 1;
    while (i <= j) {
      if (word[i++] != word[j--]) {
        return false;
      }
    }
    return true;
  };

  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};
