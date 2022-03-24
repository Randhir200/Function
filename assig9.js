function sumOfTwo(n1,n2) {
  var s=n1+n2;
  return s;
}
function sumOfThree(s,n3) {
  var s=s+n3;
  return s;
}
var s = sumOfTwo(5,6);
console.log(s);
console.log(sumOfTwo(s,6));