function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([5, 3, 20, 3], 50);
