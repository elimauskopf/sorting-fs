function bubbleSort(arr){
  for (var i =0; i<arr.length; i++){ //for every element
    for (var j=1; j<arr.length; j++){ //for every adjacent element
      if (arr[j-1] > arr[j]){ //if current greater than next one
        swap(j-1,j,arr);
      }
    }
  }
  return arr;
}

function swap(first,second,arr){
  temp = arr[second];
  arr[second] = arr[first];
  arr[first] = temp;
}

function mergeSort(arr){
  // baseCase
  //var resultArr = [];
  if (arr.length === 1){
    return arr;
  } else {
    var left = split(arr)[0];
    // console.log(left);
    var right = split(arr)[1];
    // console.log(right);
    return merge(mergeSort(left), mergeSort(right));
  }

}

function merge(arr1, arr2) {
  var resultArr = [];

  while(arr1.length && arr2.length) {

    if (arr1[0] > arr2[0]){
      resultArr.push(arr2.shift());
    } else {
      resultArr.push(arr1.shift());
    }
  }
//console.log(resultArr);
//console.log(arr1);
//console.log(arr2);
 if (arr1.length) {
   //console.log('a');
   resultArr = resultArr.concat(arr1);
 } else {
   //console.log('b');
   resultArr = resultArr.concat(arr2);
   //console.log(resultArr);
 }
//console.log(resultArr);
return resultArr;

}

function split(arr){


index = Math.floor(arr.length/2);
return [arr.slice(0,index),arr.slice(index)];
}
