function nonPrime(n){
  for(var i=3;i<=n;i++){
    for(var j=2;j<i;j++){
      if(i%j==0){
        console.log(i);
        break;
      }
    }
  }
  
}
nonPrime(40);