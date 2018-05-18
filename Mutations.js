function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  var arr2 = arr[1].split('');
  for (var i = 0; i < arr2.length; i++) {
    if (arr[0].indexOf(arr2[i]) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
