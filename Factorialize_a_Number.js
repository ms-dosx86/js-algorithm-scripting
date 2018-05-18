function factorialize(num) {
  var t = 1;
  for (var i = 1; i <= num; i++) {
    t *= i;
  }
  return t;
}

factorialize(5);
