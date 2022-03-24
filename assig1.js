function reverse(str){
  var r="";
  for(var i=str.length-1;i>=0;i--){
    r=r+str[i];
  }
  return r;
}

console.log(reverse("Test"));