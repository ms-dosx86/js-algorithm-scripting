function findLongestWord(str) {
  var arr = str.split(' ');
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
