function prime(n){
  var f=false;
  console.log(2);
  for(var i=3;i<=n;i++){
    for(var j=2;j<i;j++){
      if(i%j==0){
        f=false;
        break;
      }else{
        f=true;
      }
    }
      f?console.log(i):f;

  }
  
}
prime(10);