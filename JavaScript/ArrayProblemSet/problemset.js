function printReverse(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}

function isUniform(arr) {
  var item = arr[0];
  for(var i=1; i <arr.length; i++){
    if(arr[i] !== item){
      return false
    }
  }
  return true;
}

function sumArray(arr) {
  sum = 0
  for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function max(arr) {
  maxNum = arr[0]
  for(var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
