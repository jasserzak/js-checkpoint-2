function sumOfArray(array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumOfArray([1, 45, 85, 2]));

//Filter Array

var filterArray = (arr, condition) => arr.filter(condition);

var numbers = [1, 2, 3, 4, 5];
var evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

console.log(evenNumbers);
