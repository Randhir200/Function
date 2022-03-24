function sum(arr){
  var sum=0;
  var avg;
  if(arr.length==0){
    return 0;
  }
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  avg=sum/arr.length;
  return avg;
}
console.log(sum([]));