//Reverse a String
function reverse(chaine) {
  var résulat = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    résulat = résulat + chaine[i];
  }
  return résulat;
}
var res = reverse("hello");
console.log(res);
//Count Characters
function nombrechar(chaine) {
  return chaine.length;
}
var res2 = nombrechar("hello");
console.log(res2);
//Capitalize Words
function capitalize(phrase) {
  var result = "";
  var capitalized = true;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== " " && capitalized === true) {
      result = result + phrase[i].toUpperCase();
      capitalized = false;
    } else result += phrase[i];
    if (phrase[i] === " ") capitalized = true;
  }
  return result;
}
console.log(capitalize("hello world"));
// array
// min and max
function min(array) {
  var min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
function max(array) {
  var max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
var numbers = [6, 3, 45, 7, 11, 35, 63, 12, 4];
console.log(min(numbers));
console.log(max(numbers));
// sum
function sumOfArray(array) {
  return array;
}
console.log(sumOfArray(numbers));
