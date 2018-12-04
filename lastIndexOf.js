function lastIndexOf(arr, val){
  var length = arr.length;
  var match = false;
  var result = 0;

  for(var i = length - 1; i >= 0; i--){
    if (val == arr[i]){
      match = true;
      result = i;
      break;
    }
  }
  if (match){
    return result;
  } else {
    return -1;
  }
}
