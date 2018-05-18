function titleCase(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split('');
    for (var j = 0; j < temp.length; j++) {
      if (j == 0) {
        temp[j] = temp[j].toUpperCase();
      } else {
        temp[j] = temp[j].toLowerCase();
      }
    }
    arr[i] = temp.join('');
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");
