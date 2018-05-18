function truncateString(str, num) {
  if (str.length > num) {
    if (num <= 3) {
      var arr1 = str.split('');
      arr1.length = num;
      arr1.push('...');
      return arr1.join('');
    } else {
      var arr = str.split('');
      arr.length = num - 3;
      arr.push('...');
      return arr.join('');
    }
  } else {
    return str;
  }
  
}

truncateString("Absolutely Longer", 2);
