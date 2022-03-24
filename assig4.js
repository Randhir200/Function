function isOdd(n){
 for(var i=1;i<=n;i++){
   if(i%2!=0){
     console.log(i);
   }
 } 
  if(n%2!=0){
    return true;
  }else{
    return false;
  }
}
console.log(isOdd(10));