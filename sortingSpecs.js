// function bubbleSort(arr){
//   for (var i =0; i<arr.length; i++){ //for every element
//     for (var j=1; j<arr.length; j++){ //for every adjacent element
//       if (arr[j-1] > arr[j]){ //if current greater than next one
//         swap(j-1,j,arr);
//       }
//     }
//   }
//   return arr;
// }

// function swap(first,second,arr){
//   temp = arr[second];
//   arr[second] = arr[first];
//   arr[first] = temp;
// }


describe('bubbleSort', function() {

  beforeEach(function() {
    testArr = [34, 1 , 3, 5, 56, 12, 90];

  });

  it('returns an array', function() {
    expect(bubbleSort(testArr).length).toBe(testArr.length);
  });

  it('returns sorted array', function() {
    expect(bubbleSort(testArr)).toBe(testArr.sort());
  });
});



// describe('merge', function(){

//   beforeEach(function() {
//     testArr = [1,2,9];
//     testArr2 = [5,6,7,10];

//   });

//   it('is able to merge two sorted arrays into one sorted array', function(){
//     expect(merge(testArr,testArr2).length).toBe(testArr.length + testArr2.length);
//   });
// });

describe('merge', function(){

  beforeEach(function() {
    testArr = [1,2,9];
    testArr2 = [3,5,7,9,10];


  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(testArr,testArr2)).toBe([1,2,9]);
  });
});

describe('mergeSort', function() {

  beforeEach(function() {
    testArr = [34, 1 , 3, 5, 56, 12, 90];

  });

  // it('returns an array', function() {
  //   expect(mergeSort(testArr).length).toBe(testArr.length);
  // });

  it('returns sorted array', function() {
    expect(mergeSort(testArr)).toBe(testArr.sort());
  });
});

describe('split', function(){

  beforeEach(function() {
    testArr = [1,2,9,10];



  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(split(testArr)).toBe([[1],[2,9]]);
  });
});
