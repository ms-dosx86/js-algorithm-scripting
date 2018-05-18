function confirmEnding(str, target) {
  var s = str.substr(str.length - target.length);
  return s == target;
}

confirmEnding("Bastian", "n");
