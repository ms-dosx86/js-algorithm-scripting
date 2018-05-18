function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return arr;
  }
  var res = [];
  var t = [];
  for (var i = 0; i < arr.length; i += size) {
    if (i + size < arr.length) {
      res.push(arr.slice(i, i + size));
    } else {
      res.push(arr.slice(i));
    }
  }
  return res;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
