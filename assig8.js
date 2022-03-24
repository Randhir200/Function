function absoluteDiff(n1,n2) {
  var diff = n1-n2;

  if(diff>=0){
    return diff;
  }else{
    diff = -(diff*diff)/diff;
    return diff;
  }
  
}
console.log(absoluteDiff(15,10));