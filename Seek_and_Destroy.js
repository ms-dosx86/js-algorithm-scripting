function destroyer(arr) {
  return arr.filter(item => {
    for (var i = 0; i < arguments.length; i++) {
      if (item == arguments[i]) {
        return false;
      }
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
