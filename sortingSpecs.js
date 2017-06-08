describe('bubbleSort', function() {

  beforeEach(function() {
    var testArr = [34, 1 , 3, 5, 56, 12, 90];
  })

  it('returns an array', function() {
    expect(bubbleSort(testArr).length === testArr.length);
  })

  it('returns sorted array', function() {
    expect(bubbleSort(testArr) === testArr.sort());
  })
})
