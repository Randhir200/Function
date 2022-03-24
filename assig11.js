function primeOrNot(n) {
  var f=false;
  for(var i=3;i<=n;i++){
    for(var j=2;j<i;j++){
      if(i%j==0){
        f=false;
        break;
      }else{
        f=true;
      }
    }
  }
  return f;
}

console.log(primeOrNot(37));