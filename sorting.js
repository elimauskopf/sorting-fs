function bubbleSort(arr){
  for (var i =0; i<arr.length: i++){ //for every element
    for (var j=1; j<arr.length: j++){ //for every adjacent element
      if (arr[i] > arr[j]){ //if current greater than next one
        swap(,j,arr);
      }
    }
  }
}

function swap(first,second,arr){
  temp = arr[second];
  arr[second] = arr[first];
  arr[first] = temp;
}
