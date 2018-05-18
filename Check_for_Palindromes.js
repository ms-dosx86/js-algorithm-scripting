function palindrome(str) {
  var str1 = str.split('').reverse().join('');
  str1 = str1.replace(/[^a-zA-Z0-9]/g, '');
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  console.log(str1);
  return str.toLowerCase() == str1.toLowerCase();
}



palindrome("eye");
