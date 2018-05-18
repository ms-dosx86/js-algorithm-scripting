function repeatStringNumTimes(str, num) {
  var s = '';
  for (var i = 0; i < num; i++) {
    s += str;
  }
  return s;
}

repeatStringNumTimes("abc", 4);
